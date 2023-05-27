import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#444444",
    },
    error: {
      main: "#F05454",
    },
    warning: {
      main: "#EDEDED",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Genos",
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        root: {
          fontFamily: "Genos",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: "#F05454",
          fontFamily: "Genos",
          fontSize: 18,
          fontWeight: "bolder",
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        fab: {
          fontFamily: "Genos",
          fontWeight: "bolder",
          height: 75,
          width: 75,
          border: "1px solid white",
          ariaLabel: "Contact Me",
        },
      },
    },
  },
});

export default theme;
