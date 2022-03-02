import React from "react";
import Button from "@material-ui/core/Button";
const App = (props) => {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      Explore
      <Button color="primary" variant="contained" onClick={next}>
        Continue
      </Button>
    </div>
  );
};

export default App;
