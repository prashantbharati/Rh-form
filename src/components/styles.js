import { makeStyles } from "@material-ui/core/styles";
import rooftop from "./rooftop.jpg";
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
  button: {
    backgroundColor: "#68CBC1",
    color: "white",
    width: "100%",
    maxWidth: "200px",
    display: "flex",
    fontWeight: "700",
    borderStyle: "none",
    borderRadius: "999px 999px 999px 999px",
    boxShadow: "0px 5px 15px 0px rgb(39 48 112 / 51%)",
  },
  rooftop: {
    // background: `linear-gradient(190deg, rgb(169, 152, 172) 30%, rgb(167, 166, 163)30%), url(${rooftop})`,
    // background: `linear-gradient( 90deg,rgb(169, 152, 172) 0%,rgb(167, 166, 163) 100%), url(${rooftop})`,
    backgroundImage: `url(${rooftop}`,

    // backgroundRepeat: "no repeat",
    // colors={['rgba(0,0,0,0.2)', 'transparent']},
    // // colors={["white", "#ffffff00"]},
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
