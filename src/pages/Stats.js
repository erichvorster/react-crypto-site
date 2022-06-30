import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import DoughnutChartCard from "../components/DoughnutChartCard";
import PieChart from "../components/PieChart";
import "./Stats.css";
import TopPerformers from "../components/TopPerformers";
import PriceCard from "../components/PriceCard";

const Stats = ({ topCryptos }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "var(--blue)" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box pl={20} sx={{ color: "var(--white)" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, letterSpacing: "0.1rem", maxWidth: 700 }}
                pt={16}
                pb={2}
                className="home__title"
              >
                All the relevant crypto news updated live.
              </Typography>
              <Typography variant="body1" pb={2} sx={{ maxWidth: 600 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                neque alias omnis fugit sed aperiam ipsa delectus dolorem
                incidunt quos?
              </Typography>
              <Button size="large" sx={{ mr: 2 }} variant="contained">
                Pricing
              </Button>
              <Button size="large" variant="outlined">
                News
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box
              sx={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingRight: 20,
              }}
            >
              <Typography variant="h4">
                <Box
                  component="img"
                  sx={{ height: 25, width: 25 }}
                  src={topCryptos[0]?.iconUrl}
                ></Box>
                {topCryptos[0]?.name}
              </Typography>
              <Box sx={{}}>hello</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        container
        sx={{
          backgroundColor: "var(--darkBlue)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "var(--white)",
              paddingBottom: 2,
              fontWeight: 600,
              border: "2px solid var(--electricBlue)",
            }}
          >
            Top 10 market market cap
          </Typography>
        </Box>
        <Box sx={{ minWidth: 900, maxWidth: 900 }}>
          <BarChart topCryptos={topCryptos} />
        </Box>
      </Box>

      <Box
        container
        sx={{
          backgroundColor: "var(--blue)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "var(--white)",
              paddingBottom: 2,
              fontWeight: 600,
              border: "2px solid var(--electricBlue)",
            }}
          >
            Top 10 Cryptos
          </Typography>
        </Box>
        <Box>
          <TopPerformers topCryptos={topCryptos} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "var(--blue)",
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {topCryptos.map((crypto) => {
            return (
              <Grid item xs={3}>
                <PriceCard crypto={crypto} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Stats;
