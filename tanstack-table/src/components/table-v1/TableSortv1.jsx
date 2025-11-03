import {useReactTable, getCoreRowModel, flexRender,getSortedRowModel} from '@tanstack/react-table'
import { FaSort } from "react-icons/fa";

const columns = [
    {
        hearder: "Name", 
        accessorKey: "name",
    },
    {
        
        hearder: "Phone",
        accessorKey: "phone",
    }
]
const data = [
    { name: "Ros Dul", phone: "01073121770" },
    { name: "Chen Seng", phone: "0106677883" },
    { name: "Rina Kao", phone: "07865678765" },
]

const TableSortV1 = () => {
    

    
    const  table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    }) 
    return (<div>
        <table>
            <thead>
                {table.getHeaderGroups().map((hearderGroup)=>(
                    <tr key={hearderGroup.id}>
                        {hearderGroup.headers.map((header)=>(
                            <th key={header.id}>
                                {flexRender(header.column.columnDef.header,header.getContext())}
                                {
                                    header.column.getCanSort() &&<FaSort 
                                        onClick={header.column.getToggleSortingHandler()}
                                    />
                                    
                                }
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row)=>(
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell)=>(
                           <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                           </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);
}
 
export default TableSortV1;