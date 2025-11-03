import {useReactTable, getCoreRowModel, flexRender,getFilteredRowModel} from '@tanstack/react-table'
import { useState } from 'react'

const columns = [
    {
        header: "Name", 
        accessorKey: "name",
    },
    { 
        header: "Phone",
        accessorKey: "phone",
    }
]
const data = [
    { name: "Ros Dul", phone: "01073121770" },
    { name: "Chen Seng", phone: "0106677883" },
    { name: "Rina Kao", phone: "07865678765" },
]
const TableFilter = () => {
    const [globalFilter, setGlobalFilter] = useState("");

    const  table = useReactTable({
        data,
        columns,
        state:{
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        
    }) 
    
    return ( <div>
            <input
                value={globalFilter ?? ""}
                onChange={(e)=>setGlobalFilter(e.target.value)}
                placeholder='Search table'
            />
        <table>
            <thead>
                {table.getHeaderGroups().map((hearderGroup)=>(
                    <tr key={hearderGroup.id}>
                        {hearderGroup.headers.map((header)=>(
                            <th key={header.id}>
                                {flexRender(header.column.columnDef.header,header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.length === 0?(
                    <tr>
                        <td>No Data</td>
                    </tr>
                ):(
                    table.getRowModel().rows.map((row)=>(
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell)=>(
                               <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                               </td>
                            ))}
                        </tr>
                    ))
                )}
    
            </tbody>
        </table>
    </div>);
}
 
export default TableFilter;