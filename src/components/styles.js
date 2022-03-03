import { makeStyles } from "@material-ui/core/styles";
import roofimg1 from "./rooftop1.jpeg";
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
    // background:
    //   `-moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(${https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png?v=c78bd457575a}) no-repeat`,
    // background: `linear-gradient( 90deg,rgb(169, 152, 172) 0%,rgb(167, 166, 163) 100%), url(${rooftop})`,
    // backgroundImage: 'linear-gradient(to bottom, black, white),
    //   url(${roofim/g.jpg})';
    // backgroundImage: `url(${roofimg})`,

    // backgroundRepeat: "no repeat",
    // colors={['rgba(0,0,0,0.2)', 'transparent']},
    // // colors={["white", "#ffffff00"]},
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
