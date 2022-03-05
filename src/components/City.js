import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import App2 from "./App2";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cities from "./citydetails";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const App = (props) => {
  const classes = useStyles();
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
    <div className={classes.rooftop}>
      <Typography style={{ color: "grey" }} variant="h2">
        Select Your City
      </Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
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
