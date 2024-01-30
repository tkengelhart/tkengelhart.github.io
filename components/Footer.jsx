import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import * as React from "react";
import theme from "../src/theme";

const pages = [
  {
    name: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://github.com/tkengelhart"
      >
        <Typography
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
          variant="h6"
        >
          Github
        </Typography>
      </Link>
    ),
  },
  {
    name: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://github.com/tanyaJLG"
      >
        <Typography
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
          variant="h6"
        >
          Github (work)
        </Typography>
      </Link>
    ),
  },
  {
    name: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://www.linkedin.com/in/tanyaengelhart/"
      >
        {" "}
        <Typography
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
          variant="h6"
        >
          LinkedIn
        </Typography>
      </Link>
    ),
  },
  {
    name: (
      <Link className="linkProps" href="mailto: tkengelhart@gmail.com">
        <Typography
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
          variant="h6"
        >
          Email
        </Typography>
      </Link>
    ),
  },
  {
    name: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://drive.google.com/file/d/1F8CkPZYEyCJl-0z1_fuj0iyul8TZg35w/view?usp=sharing"
      >
        <Typography
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
          variant="h6"
        >
          Resume
        </Typography>
      </Link>
    ),
  },
  {
    name: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://calendly.com/technicaltanya"
      >
        <Typography
          sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
          variant="h6"
        >
          Let's talk!
        </Typography>
      </Link>
    ),
  },
];
function Footer() {
  return (
    <>
  
      <Toolbar
        disableGutters
        width="100%"
      >
                <Grid
        className="footerStyle"
        container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 4, md: 12 }}
        sx={{
          backgroundColor: theme.palette.error.main,
         justifyContent: 'space-evenly',
         alignItems: 'flex-end'

        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.warning.main,
            fontWeight: "bolder",
          }}
        >
          Contact
        </Typography>
        {pages.map((page, i) => (
          <Button
            key={i}
            sx={{ my: 2, color: theme.palette.warning.main, display: "block", p: 0, m: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              {
                page.link;
              }
            }}
          >
            {page.name}
          </Button>
        ))}
               <Typography
          sx={{
            color: theme.palette.warning.main,
            fontWeight: "bolder",
          }}
          variant="subtitle1"
        >
          &copy; Technical Tanya, 2023
        </Typography>
          </Grid>
        
            </Toolbar>
      
    </>
  );
}
export default Footer;
