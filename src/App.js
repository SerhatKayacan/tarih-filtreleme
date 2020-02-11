import React, { useState } from "react";
import { filterDates, findBetween } from "./FilterDates";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

function App() {
  const classes = useStyles();
  const [selected, setselected] = useState("");
  const [start, setStart] = useState("2020-01-01");
  const [end, setEnd] = useState("2020-02-11");
  const [dates, setDates] = useState([
    { date: "2020-02-11 09:09:09" },
    { date: "2020-02-10 09:09:09" },
    { date: "2020-02-09 09:09:09" },
    { date: "2020-01-11 09:09:09" },
    { date: "2019-02-11 09:09:09" },
    { date: "2018-02-11 09:09:09" }
  ]);
  const filterProperty = "date";
  const [filteredDates, setFilteredDates] = useState([]);

  const changeDate = selectedDate => {
    setselected(selectedDate);
    setFilteredDates(filterDates(dates, selectedDate, filterProperty));
  };
  const findBetweenFonk = (dates, start, end) => {
    setFilteredDates(findBetween(dates, start, end, filterProperty));
  };
  return (
    <div className="App">
      <div>
        bugün
        <input
          type="radio"
          value="today"
          checked={selected === "today"}
          onChange={e => changeDate(e.target.value)}
        ></input>
      </div>
      <div>
        dün
        <input
          type="radio"
          value="yesterday"
          checked={selected === "yesterday"}
          onChange={e => changeDate(e.target.value)}
        ></input>
      </div>
      <div>
        bu ay
        <input
          type="radio"
          value="thismonth"
          checked={selected === "thismonth"}
          onChange={e => changeDate(e.target.value)}
        ></input>
      </div>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          type="date"
          value={start}
          onChange={e => setStart(e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          type="date"
          value={end}
          onChange={e => setEnd(e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
      <button onClick={() => findBetweenFonk(dates, start, end)}>
        aradakileri bul
      </button>
      <ul>
        {filteredDates.map(dateObject => {
          return <li>{dateObject.date}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
