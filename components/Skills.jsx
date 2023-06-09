import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../src/theme";
import {
  faGithub,
  faJsSquare,
  faReact,
  faHtml5,
  faSlack,
  faNodeJs,
  faAtlassian,
  faGit,
  faCss3,
  faNpm,
  faTrello,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { Stack, Typography, Grid } from "@mui/material";

export const Skills = () => {
  return (
    <>
     <Grid         container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 4, md: 12 }}
 sx={{justifyContent: 'space-evenly', alignItems: 'flex-end'          ,
     opacity: 0.5,

}}>
    
        <Typography
          variant="h5"
          style={{
            color: theme.palette.error.main,
            fontSize: "35px",
            fontWeight: "bolder",
          }}
        >
          Skills
        </Typography>
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faSlack}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faAtlassian}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faGit}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faCss3}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faNpm}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faTrello}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
      </Grid>
    </>
  );
};
