import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import App2 from "./components/App2.js";
import theme from "./theme";
// import Indiamap from "./components/Indiamap";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
