import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext()
export const SearchProvider = ({children}) => {

const [data, setData] = useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [query, setQuery] = useState("");

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            setError(null)
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                setData(response.data)
            } catch (error) {
                console.error(error)
                setError(error.message || String(error))
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    const filteredData = useMemo(() => {
        if (!query) return data
        const q = query.toLowerCase()
        return data.filter(item => {
            return (
                String(item.title || item.name || "").toLowerCase().includes(q) ||
                String(item.category || "").toLowerCase().includes(q) ||
                String(item.description || "").toLowerCase().includes(q) ||
                String(item.brand || "").toLowerCase().includes(q) ||
                String(item.price || "").toLowerCase().includes(q)
            )
        })
    }, [data, query])

    const value = {data, filteredData, loading, error, query, setQuery}

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>;
}
 
