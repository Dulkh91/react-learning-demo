import { createContext,useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
    const value = {theme, setTheme}

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>;
}
 

