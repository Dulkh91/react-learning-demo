import { ThemeProvider } from "./Context/ThemeContext"
import { LanguageProvider } from "./Context/LaunguageContext"
import HomePage from "./Page/Home"
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePage/>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
