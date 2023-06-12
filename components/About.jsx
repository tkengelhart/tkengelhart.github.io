import { Stack, Typography, Grid } from "@mui/material";
import React from "react";
import theme from "../src/theme";

const About = () => {
  return (
    <>

        <Typography
          variant="h3"
          component="div"
          sx={{ color: theme.palette.error.main, fontWeight: "bolder" }}
        >
Welcome        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
        >
Thanks for visiting.  My name is Tanya and I have had the nickname Technical Tanya since childhood.  My insistence on reading directions and explaining the importance of details earned me this moniker from my siblings.  Once I decided to make a career change, I decided to embrace my nickname and pivot into the tech space.  My background is varied, I have a PR degree, Sociology minor and I spent quite a few years working in accounting roles and contributing to marketing and communications efforts.  Please feel free to look through my projects below and you can find my contact information at the bottom.  Thanks for stopping by!
<br />
--T        </Typography>

    </>
  );
};

export default About;
