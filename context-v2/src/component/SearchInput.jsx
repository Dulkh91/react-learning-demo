import React from "react";
import useSeach from "../hook/useSearch";

const SearchInput = () => {
  const { query, setQuery } = useSeach();
  return (
    <div style={{marginBottom: 12}}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, category, description, price..."
        style={{padding: 8, width: '100%', maxWidth: 400}}
      />
    </div>
  );
};

export default SearchInput;
