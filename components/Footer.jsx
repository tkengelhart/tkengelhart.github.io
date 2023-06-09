import { Box } from "@mui/material";
import React from "react";
import MenuBar from "../components/MenuBar";
import theme from "../src/theme";

const Footer = () => {
  return (
    <>
      <Box
        className="footerStyle"
        sx={{
          backgroundColor: theme.palette.error.main,
          pr: 3,
          pl: 3,
          position: "fixed",
        }}
      >
        <MenuBar />
      </Box>
    </>
  );
};

export default Footer;
