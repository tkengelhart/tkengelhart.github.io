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
import { Stack, Typography } from "@mui/material";

export const Skills = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={7}
        sx={{
          opacity: 0.25,
          justifyContent: "space-between",
          paddingBottom: 2,
        }}
      >
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
      </Stack>
    </>
  );
};
