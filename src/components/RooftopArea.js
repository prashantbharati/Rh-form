import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
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
      RooftopArea
      <Button color="primary" variant="contained" onClick={next}>
        Continue next
      </Button>
      <Button color="primary" variant="contained" onClick={back}>
        Continue back
      </Button>
    </div>
  );
};

export default App;
