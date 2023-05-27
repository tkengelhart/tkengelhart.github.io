import React from "react";
import { useState } from "react";
import { initialProjects as tabs, projects } from "./ProjectList";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import theme from "../src/theme";
import Link from "next/link";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <Typography
        variant="h4"
        sx={{
          marginLeft: 3,
          color: theme.palette.warning.main,
          fontWeight: "bolder",
        }}
      >
        Projects
      </Typography>{" "}
      <br />
      <Typography
        variant="subtitle1"
        sx={{
          marginLeft: 3,
          color: theme.palette.warning.main,
          fontWeight: "bolder",
        }}
      >
        click on the project photo to view.
      </Typography>
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.name}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {item.name}
              </Typography>

              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence>
          <motion.div
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            style={{ justifyContent: "center" }}
            transition={{ ease: "anticipate" }}
          >
            <Link href={selectedTab.link} target="_blank">
              <motion.img
                key={selectedTab ? selectedTab.name : "empty"}
                src={selectedTab.image}
                width={400}
                height={400}
                initial={{ opacity: 0.4 }}
                title={selectedTab.about}
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
