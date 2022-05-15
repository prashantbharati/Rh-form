import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import cities from "./citydetails";
import lastnew1 from "./lastnew1.jpg";
const App = (props) => {
  const classes = useStyles();

  // Area of the rooftop - i/p sq ft *0.092
  // Select city - Store data from the website - i/p city -o/p rainfall in mm
  // Total rain water
  // = Rainfall (mm) x Area of Rooftop x 0.9 *1000

  const user = props.user,
    currcity = user.city;
  // console.log( currcity);
  console.log(user, currcity);

  function check(city) {
    return city.Name === currcity;
  }

  let rainfall = cities.filter(check);

  const result = () => {
    let Area = user.area * 0.092;

    let answer = Math.floor(Area * rainfall[0].rain * 0.9);

    return answer;
  };
  let fanswer = Math.ceil(result());
  console.log(fanswer);

  console.log(user);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${lastnew1})`,

        backgroundSize: "100% 100%",
      }}
    >
      <div
        style={{
          height: "250px",
          width: "250px",
          borderRadius: "50%",
          backgroundColor: "green",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "absolute",
          right: "20%",
          top: "20%",
        }}
      >
        <Typography style={{ color: "white" }} variant="h4">
          Hurray!!
        </Typography>
        <Typography style={{ color: "white" }} variant="h4">
          You saved around
          {` ${fanswer}`} litres
        </Typography>
      </div>
    </div>
  );
};

export default App;
