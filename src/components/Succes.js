import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
const App = (props) => {
  const classes = useStyles();

  // Area of the rooftop - i/p sq ft *0.092
  // Select city - Store data from the website - i/p city -o/p rainfall in mm
  // Total rain water
  // = Rainfall (mm) x Area of Rooftop x 0.9 *1000

  const user = props.user,
    setuser = props.setuser,
    city = props.city;

  const result = () => {
    let Area = user.area * 0.092;
    let rainfall = 100;
    const answer = rainfall * Area * 0.9 * 100;
    return answer;
  };
  let fanswer = Math.ceil(result());
  console.log(fanswer);

  console.log(user);

  return (
    <div className={classes.waterharvested}>
      <Typography style={{ color: "white" }} variant="h1">
        You saved around
        {` ${fanswer}`} litres
      </Typography>
    </div>
  );
};

export default App;
