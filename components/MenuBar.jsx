import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../src/theme";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faIdCard,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

const pages = [
  {
    icon: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://github.com/tkengelhart"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    ),
    name: "Github",
  },
  {
    icon: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://www.linkedin.com/in/tanyaengelhart/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    ),
    name: "LinkedIn",
  },
  {
    icon: (
      <Link className="linkProps" href="mailto: tkengelhart@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    ),
    name: "Email",
  },
  {
    icon: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://drive.google.com/file/d/1Jx_awWidMr2_mxJZj1t9dwHe1ylSHrzo/view?usp=sharing"
      >
        <FontAwesomeIcon icon={faFilePdf} />
      </Link>
    ),
    name: "Resume",
  },
  {
    icon: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://calendly.com/technicaltanya"
      >
        <FontAwesomeIcon icon={faCalendarPlus} />
      </Link>
    ),
    name: "Schedule",
  },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {pages.map((page, i) => (
            <Button
              key={i}
              sx={{
                my: 2,
                display: "block",
              }}
              onClick={(e) => {
                e.stopPropagation();
                {
                  page.link;
                }
              }}
            >
              <Typography
                sx={{ color: theme.palette.warning.main, fontWeight: "bolder" }}
                variant="h6"
              >
                {page.name}
              </Typography>
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
