import React, { useState } from "react";
import { filterDates, findBetween } from "./FilterDates";
import SearchComponent from "./SearchComponent";

function Component1() {
  const [selected, setselected] = useState("");
  const [start, setStart] = useState("2020-01-01");
  const [end, setEnd] = useState("2020-02-11");
  const [state, setState] = useState([
    { date: "2020-02-11 09:09:09" },
    { date: "2020-02-10 09:09:09" },
    { date: "2020-02-09 09:09:09" },
    { date: "2020-01-11 09:09:09" },
    { date: "2019-02-11 09:09:09" },
    { date: "2018-02-11 09:09:09" }
  ]);
  const filterProperty = "date";
  const [filteredState, setFilteredState] = useState([]);

  const changeDate = selectedDate => {
    setselected(selectedDate);
    setFilteredState(filterDates(state, selectedDate, filterProperty));
  };
  const findBetweenFonk = (dates, start, end) => {
    setFilteredState(findBetween(dates, start, end, filterProperty));
  };
  return (
    <div>
      <SearchComponent
        selected={selected}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        state={state}
        changeDate={changeDate}
        findBetweenFonk={findBetweenFonk}
      />
      <ul>
        {filteredState.map(dateObject => {
          return <li>{dateObject.date}</li>;
        })}
      </ul>
    </div>
  );
}

export default Component1;
