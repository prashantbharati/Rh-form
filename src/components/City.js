import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import App2 from "./App2";
const App = (props) => {
  const [selectedPark, setSelectedPark] = useState(null);
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
      <div
        style={{
          display: "none",
          position: "absolute",
          // top: "15%",
          // left: "15%",
          width: "40%",
          height: "70%",
          padding: "16px",
          // border: "16px solid orange"
          alignItems: "center",
        }}
      >
        <App2 selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
      </div>
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
