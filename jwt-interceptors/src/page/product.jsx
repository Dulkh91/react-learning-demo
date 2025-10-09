import { useEffect,useState } from "react";
import { AuthService } from "../server/authSever";

const ProductPage = () => {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                setLoading(true)
                const product = await AuthService.productList()
                setProductData(product)
            } catch (err) {
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    if(loading) return <div>Loading.....</div>
    if(error) return <div>Error: {error}</div>
    console.log(productData.data);
    return ( <div>
        {productData.data.map((pro)=>(
            <div key={pro.id}>
                <img src={pro.images} alt={pro.name} width={200} height={200}/>
                <p>{pro.title}</p>
            </div>
        ))}
    </div> );
}
 
export default ProductPage;