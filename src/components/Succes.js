import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
const App = (props) => {
  const classes = useStyles();

  const user = props.user,
    setuser = props.setuser;
  console.log(user);
  const lol = "hello";
  return (
    <div className={classes.waterharvested}>
      <Typography variant="h1">{lol}</Typography>
    </div>
  );
};

export default App;
