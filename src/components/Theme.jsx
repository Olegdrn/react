import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { Link } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Link to="/chats">  <Button color="primary" >Chats</Button></Link >
      <Link to="/"> <Button color="secondary">Home</Button></Link >
      <Link to="/">  <Button>React testing</Button></Link >
    </ThemeProvider >
  );
}