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
                pt={12}
                pb={2}
                className="home__title"
              >
                Catch up to the crypto world with Crypti
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
            <Box p={8}>
              <Typography variant="h4">{topCryptos[0]?.name}</Typography>
              <DoughnutChart topCryptos={topCryptos} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "var(--blue)" }}>
        <Grid container spacing={2}>
          {topCryptos.map((crypto) => {
            return (
              <Grid item xs={4} sx={{ padding: 5 }}>
                <Box>
                  <DoughnutChartCard crypto={crypto} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Stats;
