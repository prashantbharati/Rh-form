import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";

// import App from "./App";
import App2 from "./components/App2.js";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App2 />
  </ThemeProvider>,
  document.getElementById("root")
);
