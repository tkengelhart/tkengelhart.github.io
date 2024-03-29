import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faIdCard,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import * as React from "react";
import theme from "../src/theme";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
  },
}));

const mainAction = { icon: "Contact" };

const actions = [
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    name: "Github",
    link: (
      <Link
        className="linkProps"
        target="_blank"
        href="https://github.com/tkengelhart"
      />
    ),
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
    name: "Schedule a 15 minute call with me",
  },
];

export default function PlaygroundSpeedDial() {
  const direction = "right";

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "absolute", ml: 3, mt: 1 }}>
        <StyledSpeedDial
          ariaLabel="Connect"
          icon={mainAction.icon}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={(e) => {
                e.stopPropagation();
                {
                  action.link;
                }
              }}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
