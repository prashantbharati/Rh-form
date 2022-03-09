import React from "react";
import Button from "@material-ui/core/Button";
import App2 from "./App2";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cities from "./citydetails";
import useStyles from "./styles";
import { Typography, Container, Grid } from "@material-ui/core";
// import Indiamap from "./Indiamap";
const App = (props) => {
  const classes = useStyles();

  const user = props.user,
    setuser = props.setuser;
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleclick = () => {
    document.querySelector("#map").style.display = "flex";
  };
  const handleChange = (e) => {
    console.log(e.target);
    setuser({ ...user, city: e.target.value });
  };

  console.log(user);
  return (
    <div className={classes.roof}>
      <Grid container spacing={12}>
        <Grid item spacing={6}>
          <div className={classes.rooftop}>
            <Container>
              <Typography style={{ color: "white" }} variant="h2">
                Select Your City
              </Typography>

              <div className={classes.roofbutton}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={user.city}
                      label="Age"
                      onChange={handleChange}
                    >
                      {cities.map((city) => (
                        <MenuItem value={city.Name}>{city.Name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Button
                  className={`${classes.button} ${classes.mapbutton}`}
                  variant="contained"
                  onClick={handleclick}
                >
                  Select From Map
                </Button>
              </div>

              <div
                id="map"
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "500px",
                  zIndex: "1000",
                }}
              >
                <App2 user={user} setuser={setuser} />
              </div>

              <br />
              <br />
              <br />
              <div className={classes.roofbutton}>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={next}
                >
                  Continue next
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={back}
                >
                  Continue back
                </Button>
              </div>
            </Container>
          </div>
        </Grid>
        {/* className={`${classes.root} ${classes.form}`} */}

        <Grid item md={6}>
          <div className={classes.map}>
            <App2 user={user} setuser={setuser} />
          </div>
        </Grid>

        {/* {maxWidth < 768 && (
          <Button
            className={classes.button}
            variant="contained"
            // onClick={next}
          >
            Select from the Map
          </Button>
        )} */}
      </Grid>
    </div>
  );
};

export default App;
