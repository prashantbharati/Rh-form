import { makeStyles } from "@material-ui/core/styles";
import roofimg1 from "./rooftop1.jpeg";
import waterharvested from "./waterharvested.jpeg";
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
    maxWidth: "200px",
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
  waterharvested: {
    backgroundImage: `url(${waterharvested})`,
    height: "100vh",
    backgroundSize: "cover",
    overflow: "hidden",
  },
});
