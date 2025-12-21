import useSeach from "../hook/useSearch";
const UserTable = () => {
    const {filteredData, loading, error} = useSeach()
    return ( <>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        <table>
            <thead>
                <tr>
                    <th>category</th>
                    <th>title</th>
                    <th>price</th>
                    <th>rating</th>
                </tr>
            </thead>
            <tbody>
                {(filteredData || []).map(table => (
                    <tr key={table.id}>
                        <td>{table.category}</td>
                        <td>{table.title || table.name}</td>
                        <td>{table.price}</td>
                        <td>{table.rating?.rate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </> );
}

export default UserTable;