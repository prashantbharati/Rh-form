import React from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./styles";
import { Typography, Container } from "@material-ui/core";
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
  const user = props.user,
    setuser = props.setuser;
  console.log(user);
  return (
    <div className={classes.roof}>
      <div className={classes.rooftop}>
        <Container>
          <Typography style={{ color: "white" }} variant="h2">
            Enter your Rooftop Area
          </Typography>
          <br />
          <TextField
            name="title"
            variant="outlined"
            label="Area (sq feet)"
            onChange={(e) => setuser({ ...user, area: e.target.value })}
          ></TextField>
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
      <div className={classes.roofleft}></div>
    </div>
  );
};

export default App;
