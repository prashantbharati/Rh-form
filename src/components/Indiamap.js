import React from "react";
import Indiamap from "./India map.png";
import useStyles from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaThinkPeaks, FaMapPin, FaLocationPin } from "react-icons/fa";

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
      <FaMapPin
        style={{
          display: "absolute",
          right: "1000px",
          color: "red",
        }}
      />
    </div>
  );
};

export default Map;
