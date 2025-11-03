import UserTable from './components/tableSort/tableSort'
import './App.css'
import TableSortV1 from './components/table-v1/TableSortv1'
import TableFilter from './components/tableFilter/TableFilter'

function App() {
  

  return (
    <>
      <UserTable/>
      <hr/>
      <TableSortV1/>
      <hr/>
      <TableFilter/>
    </>
  )
}

export default App
