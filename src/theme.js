import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
  button: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
});

export default theme;
