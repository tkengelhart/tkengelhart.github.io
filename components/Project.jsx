import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";
import theme from "../src/theme";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./ProjectList";
import { Skills } from "./Skills";

export const Project = () => {
  return (
    <>
      <Stack
        sx={{ mt: 2, textAlign: "left", justifyItems: "left", spacing: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.error.main,
            fontWeight: "bolder",
            mb: 2,
          }}
        >
          Projects
        </Typography>
        {projects.map((project, i) => (
          <>
            <Box
              sx={{
                display: "inline-block",
                mr: 20,
                ml: 20,
                overflow: "scroll",
              }}
            >
              <Link
                key={project.name}
                className="projectList"
                target="_blank"
                href={project.link}
              >
                {project.name}
                <FontAwesomeIcon
                  icon={faLink}
                  size="2xs"
                  style={{
                    color: theme.palette.error.main,
                    textAlign: " right",
                    marginLeft: "10px",
                  }}
                />
                <Box
                  sx={{
                    ml: 30,
                    mt: -4,
                    mb: 2,
                    justifyContent: "left",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.warning.main,
                      fontWeight: "bolder",
                      textAlign: "left",
                    }}
                  >
                    {project.about}
                  </Typography>
                  <Button sx={{ color: theme.palette.error.main, p: 0, m: 0 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bolder",
                        textAlign: "left",
                      }}
                    >
                      {project.tech}
                    </Typography>
                  </Button>
                </Box>
              </Link>
            </Box>
          </>
        ))}
      </Stack>
    </>
  );
};

export default Project;
