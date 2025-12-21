import { SearchProvider } from './context/searchContext'
import UserTable from './component/useTable'
import SearchInput from './component/SearchInput'
import './App.css'

function App() {
  return (
   <>
      <SearchProvider>
        <div style={{padding: 16}}>
          <SearchInput />
          <UserTable/>
        </div>
      </SearchProvider>
   </>
  )
}

export default App
