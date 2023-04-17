import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import { Stack, Card, CardContent, Typography } from "@mui/material";
import theme from "../src/theme";
import Link from "next/link";

export default function Scroller() {
  const sliderRef = useRef(null);

  return (
    <>
      <motion.div
        ref={sliderRef}
        animate={{
          height: 500,
          backgroundColor: theme.palette.warning.main,
          paddingTop: 100,
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          sx={{ justifyContent: "center", textAlign: "center", width: "100%" }}
        >
          
          <Card sx={{ border: 1, borderColor: theme.palette.primary.main }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: theme.palette.error.main }}
              >
                Seed to Feed
              </Typography>

              <Link
                href="https://github.com/Seed-to-Feed/seedtofeed"
                target="_blank"
                passHref
              >
                <img src="./photos/seedtofeed.jpg" height={200} width={200} />
              </Link>
            </CardContent>
          </Card>
          <Card sx={{ border: 1, borderColor: theme.palette.primary.main }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: theme.palette.error.main }}
              >
                React Calculator
              </Typography>

              <Link
                href="https://github.com/tkengelhart/react-calculator"
                target="_blank"
                passHref
              >
                <img src="./photos/calculator.jpg" height={200} width={200} />
              </Link>
            </CardContent>
          </Card>
          <Card sx={{ border: 1, borderColor: theme.palette.primary.main }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: theme.palette.error.main }}
              >
                WeGo Travel
              </Typography>
              <Link
                href="https://github.com/tkengelhart/wego_travel"
                target="_blank"
                passHref
              >
                <img src="./photos/travel.jpg" height={200} width={200} />
              </Link>
            </CardContent>
          </Card>
          {/* <Card sx={{ border: 1, borderColor: theme.palette.primary.main }}>
            <CardContent>
              <Link
                href="https://github.com/tkengelhart/wego_travel"
                target="_blank"
                passHref
              >
                <img src="./photos/shuttle.jpg" height={200} width={200} />
              </Link>
            </CardContent>
          </Card> */}
        </Stack>
      </motion.div>
    </>
  );
}
