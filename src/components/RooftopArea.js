import React from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./styles";
import { Typography, Container, Grid } from "@material-ui/core";
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
      <Grid container spacing={12}>
        <Grid item md={6} lg={4}>
          <div className={classes.rooftop}>
            <Container>
              <Typography style={{ color: "white" }} variant="h2">
                Enter Rooftop Area
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
        </Grid>
        <Grid item md={6} lg={8}>
          <div className={classes.roofleft}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
