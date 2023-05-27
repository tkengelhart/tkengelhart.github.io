import { Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../src/theme";

const Header = () => {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          textAlign: "right",
          marginRight: 3,
          padding: 0,
          marginTop: 1,
          flexWrap: true,
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
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
        >
          full stack software developer
        </Typography>
      </Stack>
    </>
  );
};

export default Header;
