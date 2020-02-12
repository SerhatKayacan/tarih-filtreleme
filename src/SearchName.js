import React, { useState } from "react";
import { filterByName } from "./FilterFunctions";

function SearchName(props) {
  const [searchedName, setSearchedName] = useState("");
  const filter = () => {
    const result = filterByName(
      props.state,
      searchedName,
      props.filterPropertyName
    );
    props.setFilteredState(result);
    props.setselected("");
  };
  return (
    <div>
      <input
        type="text"
        value={searchedName}
        onChange={e => {
          setSearchedName(e.target.value);
        }}
      ></input>
      <button onClick={filter}>ara</button>
    </div>
  );
}

export default SearchName;
