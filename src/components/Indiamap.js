import React from "react";
import Indiamap from "./India map.png";
import useStyles from "./styles";
const Map = () => {
  const classes = useStyles();
  return (
    <div className={classes.india}>
      <img
        style={{
          height: "100vh",
          width: "100vh",
        }}
        src={Indiamap}
        alt="Indiamap"
      ></img>
    </div>
  );
};

export default Map;
