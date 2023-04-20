import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import React from "react";
import theme from "../src/theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";

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
  return (
    <ImageList cols={3} gap={10} rowHeight={700}>
      {projects.map((item) => (
        <Link key={item.link} href={item.link} passHref target="_blank">
          <ImageListItem key={item.image} rows={1} cols={1} sx={{width: "100%", height: "100%"}}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
              style={{width: "100%", height: "100%"}}

            />
            <ImageListItemBar
              title={
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    color: theme.palette.warning.main,
                  }}
                  variant="h4"
                >
                  {item.name}
                </Typography>
              }
              actionIcon={
                <IconButton aria-label={`link to about ${item.name}`}>
                  <LinkIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
