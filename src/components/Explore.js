import React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
const App = (props) => {
  const classes = useStyles();
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className={classes.page}>
      <Typography variant="h2">
        {" "}
        See How much water you save in a year
      </Typography>
      <br />
      <Button className={classes.button} variant="contained" onClick={next}>
        Explore
      </Button>
    </div>
  );
};

export default App;

// #68CBC1
