import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
const App = (props) => {
  const classes = useStyles();

  const user = props.user,
    setuser = props.setuser;
  console.log(user);
  return <div className={classes.waterharvested}></div>;
};

export default App;
