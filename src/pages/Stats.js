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
import stats from "../Assets/stats.svg";
import { Link } from "react-router-dom";

const Stats = ({ topCryptos }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "var(--blue)" }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box pl={20} sx={{ color: "var(--white)" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, letterSpacing: "0.1rem", maxWidth: 700 }}
                pt={16}
                pb={2}
                className="home__title"
              >
                Crypto statistics to help you gain the upper hand.
              </Typography>
              <Typography variant="body1" pb={2} sx={{ maxWidth: 600 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                neque alias omnis fugit sed aperiam ipsa delectus dolorem
                incidunt quos?
              </Typography>
              <Link to="/prices">
                <Button size="large" sx={{ mr: 2 }} variant="contained">
                  Search all coins
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ padding: 10 }}>
              <Box component="img" src={stats} sx={{ maxWidth: 300 }}></Box>
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
