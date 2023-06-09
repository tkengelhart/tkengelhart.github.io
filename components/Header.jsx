import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import theme from "../src/theme";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          pb: 4,
          height: "100%",
          pr: 25,
          pl: 25,
          pt: 5,
          textAlign: "left",
        }}
      >
        <Stack
          direction="column"
          sx={{
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
      </Box>
    </>
  );
};

export default Header;
