import React, { useState, useMemo } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const UserTable = () => {
  const [sorting, setSorting] = useState([]);

  const data = useMemo(
    () => [
      { name: "Dul", age: 32 },
      { name: "Seng", age: 33 },
      { name: "Rina", age: 25 },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <span
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={column.getToggleSortingHandler()}
          >
            Name{" "}
            {column.getIsSorted() === "asc"
              ? "🔼"
              : column.getIsSorted() === "desc"
              ? "🔽"
              : ""}
          </span>
        ),
      },
      {
        accessorKey: "age",
        header: ({ column }) => (
          <span
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={column.getToggleSortingHandler()}
          >
            Age{" "}
            {column.getIsSorted() === "asc"
              ? "🔼"
              : column.getIsSorted() === "desc"
              ? "🔽"
              : ""}
          </span>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table border="1" cellPadding="5">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
