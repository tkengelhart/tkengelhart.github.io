import { Button, Stack, Typography, Divider } from "@mui/material";
import Link from "next/link";
import React from "react";
import theme from "../src/theme";
import { projects } from "./ProjectList";

export const Project = () => {
  return (
    <>
    
    <Stack container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 4, md: 12 }}
      direction="column" sx={{pt: 5, pl: 5}}>     
          
          <Typography
          variant="h4"
          sx={{
            color: theme.palette.warning.main,
            fontWeight: "bolder",
          }}
        >
          Projects
        </Typography>


           {projects &&
          projects.map((project, i) => (
       <>
          <Link
          key={i}
                  className="projectList"
                  target="_blank"
                  href={project.link}
                  prefetch={false}
                  passHref={true}
                >
          <Stack key={project.about} item  xs={1} sm={2} md={4}

            sx={{justifyContent: 'left'}}
             > <Typography
             variant="h6"
             sx={{
               color: theme.palette.error.main,
               fontWeight: "bolder",
             }}
           >
                  {project.name}
                  </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.warning.main,
                        fontWeight: "bolder",
                      }}
                    >
                      {project.about}
                    </Typography>
                    </Stack>

                    <Button
                      variant="text"
                      sx={{
                        color: theme.palette.error.main,
                        p: 0,
                        m: 0,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: "bolder",
                        }}
                      >
                        {project.tech}
                      </Typography>
                    </Button>
                    </Link>
<Divider key={project.name} sx={{backgroundColor: theme.palette.warning.main}} />
</>
                     ))}

</Stack>
              
                          

         
              </>

  );
};

export default Project;
