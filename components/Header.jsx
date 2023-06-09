import { Stack, Typography, Grid } from "@mui/material";
import React from "react";
import theme from "../src/theme";

const Header = () => {
  return (
    <>
      <Grid container direction="column" spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} 
        sx={{
          marginTop: 1,
          textAlign: "left",
          alignItems: 'flex-start'
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
        >
          Tanya Engelhart{" "}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: theme.palette.error.main, fontWeight: "bolder" }}
        >
          full stack software developer
        </Typography>
      </Grid>
    </>
  );
};

export default Header;
