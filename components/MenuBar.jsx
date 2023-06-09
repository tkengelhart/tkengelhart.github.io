import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import theme from "../src/theme";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        href="https://drive.google.com/file/d/1Jx_awWidMr2_mxJZj1t9dwHe1ylSHrzo/view?usp=sharing"
      >
        {" "}
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
          Schedule
        </Typography>
      </Link>
    ),
  },
];
function ResponsiveAppBar() {
  return (
    <>
      <Toolbar
        disableGutters
        sx={{
          textAlign: "right",
          justifyContent: "space-evenly",
          alignContent: "top",
          flexShrink: true,
        }}
      >
        <Typography
          variant="h3"
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
            sx={{ my: 2, color: "white", display: "block" }}
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
            justifyContent: "center",
            pl: 5,
          }}
          variant="subtitle1"
        >
          &copy; Technical Tanya, 2023
        </Typography>
      </Toolbar>
      
    </>
  );
}
export default ResponsiveAppBar;
