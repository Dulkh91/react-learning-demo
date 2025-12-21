import { createContext,useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState("kh")
    const value = {lang, setLang}
    return <LanguageContext.Provider  value={value}>
        {children}
    </LanguageContext.Provider>;
}
 
