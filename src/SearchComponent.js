import React from "react";
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
function SearchComponent(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        bugün
        <input
          type="radio"
          value="today"
          checked={props.selected === "today"}
          onChange={e => props.changeDate(e.target.value)}
        ></input>
      </div>
      <div>
        dün
        <input
          type="radio"
          value="yesterday"
          checked={props.selected === "yesterday"}
          onChange={e => props.changeDate(e.target.value)}
        ></input>
      </div>
      <div>
        bu ay
        <input
          type="radio"
          value="thismonth"
          checked={props.selected === "thismonth"}
          onChange={e => props.changeDate(e.target.value)}
        ></input>
      </div>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          type="date"
          value={props.start}
          onChange={e => props.setStart(e.target.value)}
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
          value={props.end}
          onChange={e => props.setEnd(e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
      <button
        onClick={() =>
          props.findBetweenFonk(props.state, props.start, props.end)
        }
      >
        aradakileri bul
      </button>
    </div>
  );
}
export default SearchComponent;
