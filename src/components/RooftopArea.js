import React from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
const App = (props) => {
  const classes = useStyles();
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const user = props.user,
    setuser = props.setuser;
  console.log(user);
  return (
    <div className={classes.rooftop}>
      <Typography style={{ color: "grey" }} variant="h2">
        Enter you Rooftop Area
      </Typography>
      <br />
      <TextField
        name="title"
        variant="outlined"
        label="Area (sq feet)"
        onChange={(e) => setuser({ ...user, area: e.target.value })}
      ></TextField>

      <br />
      <br />
      <div className={classes.roofbutton}>
        <Button className={classes.button} variant="contained" onClick={next}>
          Continue next
        </Button>

        <Button className={classes.button} variant="contained" onClick={back}>
          Continue back
        </Button>
      </div>
    </div>
  );
};

export default App;
