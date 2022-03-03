import React from "react";
import Button from "@material-ui/core/Button";
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
  return (
    <div className={classes.rooftop}>
      <Typography variant="h2">Enter you Rooftop Area</Typography>

      <div>
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
