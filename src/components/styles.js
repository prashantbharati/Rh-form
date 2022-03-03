import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9e9e9e",
  },
  button: {
    backgroundColor: "#68CBC1",
    color: "white",
    width: "100%",
    maxWidth: "250px",
    display: "flex",
    borderStyle: "none",
    borderRadius: "999px 999px 999px 999px",
    boxShadow: "0px 5px 15px 0px rgb(39 48 112 / 51%)",
  },
});
