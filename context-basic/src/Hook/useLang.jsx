import { useContext } from "react";
import { LanguageContext } from "../Context/LaunguageContext";

const useLanguage = () => {
    const context = useContext(LanguageContext)
    if(!context)  throw new Error("useLanguage must be use within languageProvider")
        
    return context
}
 
export default useLanguage;