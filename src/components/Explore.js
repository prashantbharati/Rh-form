import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
const App = (props) => {
  const classes = useStyles();
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className={classes.page}>
      See How much water you save
      <Button className={classes.button} variant="contained" onClick={next}>
        Continue
      </Button>
    </div>
  );
};

export default App;

// #68CBC1
