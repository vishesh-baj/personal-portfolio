import React, { useState } from "react";
// for perfomant filtering
import { useAsyncDebounce } from "react-table";
const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
    // runs 1 second after we stop typing the input
  }, 1000);
  return (
    <span className="flex justify-end py-5">
      <input
        className="input input-secondary mx-5"
        value={value}
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Global Search"
      />
    </span>
  );
};
export default GlobalFilter;
