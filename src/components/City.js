import React from "react";
import Button from "@material-ui/core/Button";
const App = (props) => {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  return (
    <div>
      City
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
