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
    link: "https://exquisite-bubblegum-181887.netlify.app/",
  },
  {
    name: "WeGo Travel",
    image: "./photos/travel.jpg",
    link: "https://github.com/tkengelhart/wego_travel",
  },
  {
    name: "Pick Your Polish",
    image: "./photos/nails.jpg",
    link: "https://main--extraordinary-sorbet-2bdb2f.netlify.app/",
  },
];

export default function ProjectList() {
  return (
    <ImageList
      sx={{
        display: "flex",
        width: "100%",
        height: 450,
        textAlign: "center",
        pl: 20,
        pr: 20,
        pt: 15,
        justifyContent: "space-evenly",
      }}
      cols={2}
      rowHeight={200}
    >
      {projects.map((item) => (
        <Link href={item.link} passHref target="_blank">
          <ImageListItem
            key={item.image}
            sx={{ height: 200, width: 200 }}
            object-fit="cover"
          >
            <img
              src={`${item.image}?w=200&h=200`}
              srcSet={`${item.image}?w=200&h=200`}
              alt={item.name}
              loading="lazy"
              sizes="(max-height: 200px)"
            />
            <ImageListItemBar
              sx={{ justifyItems: "center", alignItems: "center" }}
              title={
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    color: theme.palette.warning.main,
                  }}
                  variant="h6"
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
