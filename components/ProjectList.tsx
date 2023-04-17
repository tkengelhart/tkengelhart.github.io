import { Button, Card, CardContent, Typography } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import React from "react";
import theme from "../src/theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const projects = [
  {
    name: "Seed to Feed",
    image: "./photos/seedtofeed.jpg",
    link: "https://github.com/Seed-to-Feed/seedtofeed",
  },
  {
    name: "React Calculator",
    image: "./photos/calculator.jpg",
    link: "https://github.com/tkengelhart/react-calculator",
  },
  {
    name: "WeGo Travel",
    image: "./photos/travel.jpg",
    link: "https://github.com/tkengelhart/wego_travel",
  },
];

export default function ProjectList() {
  const [projectIndex, cycleProjects] = useCycle(0, 1, 2);

  return (
    <>
      <motion.div
        animate={{
          x: `-${projectIndex * 100}%`,

        }}
        style={{
          display: "flex",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{
              left: `${index * 100}%`,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: 'hidden'
            }}
            animate={{
              left: `${-projectIndex * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          >
            <Card
              style={{
                border: 1,
                borderColor: theme.palette.primary.main,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.error.main,
                  }}
                >
                  {project.name}
                </Typography>

                <Link href={project.link} target="_blank" passHref>
                  <img src={`/${project.image}`} height={200} width={200} />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Button onClick={() => cycleProjects(-1)}><ChevronLeftIcon /></Button>
        <Button onClick={() => cycleProjects(1)}><ChevronRightIcon /></Button>
      </div>
    </>
  );
}
