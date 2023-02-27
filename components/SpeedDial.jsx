import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { styled } from "@mui/material/styles";
import Link from 'next/link';
import * as React from "react";
import theme from '../src/theme';


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionDown": {
    top: theme.spacing(2),
    left: theme.spacing(2)
  }
}));


const actions = [
  { icon: <Link className="linkProps" target="_blank" href="https://github.com/tkengelhart"><FontAwesomeIcon icon={faGithub}  /></Link>
  , name: "Github" },
  { icon: <Link className="linkProps" target="_blank" href="https://www.linkedin.com/in/tanyaengelhart/"><FontAwesomeIcon icon={faLinkedin}  /></Link>, name: "LinkedIn"},
  { icon: <Link className="linkProps" target="_blank" href="mailto: tkengelhart@gmail.com"><FontAwesomeIcon icon={faEnvelope}  /></Link>, name: "Email" },
  { icon: <Link className="linkProps"  target='_blank' href="https://drive.google.com/file/d/1ePU-kuP3ALjFKvV0m_WGJRLEHHuloaqC/view?usp=share_link"><FontAwesomeIcon icon={faFilePdf}  /></Link>, name: "Resume" }
];

export default function PlaygroundSpeedDial() {
  const direction = "down";

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "relative", mt: 3, height: 320, ml: 5 }}>
        <StyledSpeedDial
          ariaLabel="Connect"
          icon={<FontAwesomeIcon icon={faIdCard}  />}
          direction={direction}
        >
          {actions.map((action) => (            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={e => {
                e.stopPropagation();
                {action.link}
              }}            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
