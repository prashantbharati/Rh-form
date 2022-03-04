import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import App2 from "./App2";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cities from "./citydetails";

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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            {cities.map((city) => (
              <MenuItem value={20}>{city.Name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
