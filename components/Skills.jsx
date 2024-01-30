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
     <Grid         container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 2, md: 4 }}
 sx={{justifyContent: 'space-evenly', alignItems: 'flex-end', pt: 3,
     opacity: 0.4, zIndex: 10
}}>
    
        <Typography
          variant="h5"
          style={{
            color: theme.palette.error.main,
            fontSize: "35px",
            fontWeight: "bolder",
          }}
        >
          Technologies used
        </Typography>
        <FontAwesomeIcon
          icon={faAtlassian}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Atlassian"          title="Atlassian"

        />
            <FontAwesomeIcon
          icon={faBootstrap}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Bootstrap"
          title="Bootstrap"
        />
          <FontAwesomeIcon
          icon={faCss3}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="CSS"
          title="CSS"
        />
   
             <FontAwesomeIcon
          icon={faGit}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Git"
          title="Git"
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Github"
          title="Github"
        />
                 <FontAwesomeIcon
          icon={faHtml5}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="HTML"
          title="HTML"
        />
  
           <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Javascript"
          title="Javascript"
        />
                     <FontAwesomeIcon
          icon={faNodeJs}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Nodejs"
          title="Nodejs"
        />
   
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="React"
          title="React"
        />
    
        <FontAwesomeIcon
          icon={faSlack}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
          aria-label="Slack"
          title="Slack"
        />
 
    
   
  
        <FontAwesomeIcon
          icon={faTrello}
          style={{ color: theme.palette.error.main, fontSize: "35px" }}
        />
    
      </Grid>
    </>
  );
};
