import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span className="flex justify-end py-5">
      <input
        className="input input-secondary mx-5"
        value={filterValue || ""}
        type="text"
        name=""
        id=""
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
    </span>
  );
};
export default ColumnFilter;
