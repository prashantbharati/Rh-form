import { makeStyles } from "@material-ui/core/styles";
import roofimg1 from "./rooftop1.jpeg";
import waterharvested from "./waterharvested.jpeg";
import Indiamap from "./India map.png";
export default makeStyles({
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#9e9e9e",
  },

  roofbutton: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    // justifyContent: "space-between",
  },

  button: {
    display: "table-cell",
    backgroundColor: "#68CBC1",
    color: "white",
    // width: "100%",
    maxWidth: "250px",
    // display: "flex",
    fontWeight: "700",
    borderStyle: "none",
    borderRadius: "999px 999px 999px 999px",
    boxShadow: "0px 5px 15px 0px rgb(39 48 112 / 51%)",
  },
  rooftop: {
    backgroundColor: "grey",
    backgroundImage: `url(${roofimg1})`,
    backgroundSize: "cover",
    overflow: "hidden",
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  roof: {
    display: "flex",
    flexDirection: "row",
  },
  waterharvested: {
    backgroundImage: `url(${waterharvested})`,
    height: "100vh",
    fontWeight: "700",
    backgroundSize: "cover",
    overflow: "hidden",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },

  india: {
    backgroundImage: `url(${Indiamap})`,
    // height: "100vh",
    // fontWeight: "700",
    // backgroundSize: "cover",
    // overflow: "hidden",
  },
});
