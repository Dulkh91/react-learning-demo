import { SearchContext } from "../context/searchContext";
import { useContext } from "react";
const useSeach = () => {
    const context = useContext(SearchContext)
    if(!context) throw new Error("Seach must be use within SearchProvider")
    return context;
}
 
export default useSeach;