import React, { useState, useEffect } from "react";
import "./Homes.css";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import hero from "../Assets/Cryptocurrency_SVG.svg";
import rocket from "../Assets/Startup_SVG.svg";
import news from "../Assets/Search_SVG.svg";
import TopPerformers from "../components/TopPerformers";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import PieChart from "../components/PieChart";
import NewsCard from "../components/NewsCard";

const Homes = ({ topCryptos, cryptoNews }) => {
  console.log(cryptoNews);
  return (
    <>
      <Box className="home__container container">
        <Grid container spacing={1}>
          <Grid item xs={12} md={7} lg={6}>
            <Box
              sx={{
                color: "var(--white)",
                pl: { xs: 5, sm: 8, md: 10, lg: 25, xl: 30 },
                pr: { xs: 5 },
              }}
            >
              <Typography
                variant="h2"
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
          <Grid
            container
            item
            xs={12}
            md={5}
            lg={6}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 400, md: 450 },
                maxWidth: { xs: 400, md: 450 },
                marginTop: { xs: 8, sm: 10, md: 18, lg: 12 },
                marginLeft: { md: 8 },
                mb: { xs: 10, sm: 20 },
                mr: { md: 8 },
                px: { xs: 2 },
              }}
              alt="The house from the offer."
              src={hero}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Top performers */}

      <Box sx={{ backgroundColor: "var(--darkBlue)" }}>
        <Box
          py={8}
          sx={{
            maxWidth: 900,
            margin: "0 auto",
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "var(--white)", fontWeight: 600 }}
          >
            Current top performers
          </Typography>
          <Typography
            variant="body1"
            pb={4}
            sx={{ color: "var(--lightBlue)", maxWidth: 500 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id
            quia eveniet voluptate eum minus?
          </Typography>
          <TopPerformers topCryptos={topCryptos} />
        </Box>
      </Box>

      {/* Stats */}

      <Box
        sx={{
          backgroundColor: "var(--blue)",
          paddingTop: 5,
          paddingBottom: 10,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={12}
            md={5}
            lg={6}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 400, md: 350 },
                maxWidth: { xs: 400, md: 350 },
                marginTop: { sm: 5, md: 5 },
                marginLeft: { md: 25 },
              }}
              alt="The house from the offer."
              src={rocket}
            />
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <Box
              pl={20}
              sx={{
                color: "var(--white)",
                marginRight: { md: 18 },
                pl: { xs: 5, sm: 8, md: 10, lg: 25, xl: 30 },
                pr: { sx: 5 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, letterSpacing: "0.1rem", maxWidth: 500 }}
                pt={10}
                pb={2}
                className="home__title"
              >
                Get all the latest crypto stats updated live
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
        </Grid>
      </Box>

      <div className="container">
        <Box
          sx={{
            backgroundColor: "var(--white)",
            paddingTop: 5,
            paddingBottom: 10,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box
                pl={20}
                sx={{ color: "var(--white)", marginRight: { md: 18 } }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.1rem",
                    maxWidth: 500,
                    color: "var(--lightBlue)",
                  }}
                  pt={18}
                  pb={2}
                  className="home__title"
                >
                  Stay up to date with all the latest news
                </Typography>
                <Typography
                  variant="body1"
                  pb={2}
                  sx={{ maxWidth: 600, color: "var(--blue)" }}
                >
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

            <Grid item xs={4}>
              <NewsCard
                article={cryptoNews[0]}
                width={350}
                height={400}
                color="var(--blue)"
                text="var(--white)"
              />
            </Grid>
          </Grid>
        </Box>
      </div>

      <Box container sx={{ backgroundColor: "var(--blue)" }}>
        <BarChart topCryptos={topCryptos} />
      </Box>
      <Box sx={{ backgroundColor: "var(--blue)" }}>
        <LineChart topCryptos={topCryptos} />
      </Box>
      <Box sx={{ backgroundColor: "var(--blue)" }}>
        <DoughnutChart topCryptos={topCryptos} />
      </Box>
      <Box sx={{ backgroundColor: "var(--blue)" }}>
        <PieChart topCryptos={topCryptos} />
      </Box>
    </>
  );
};

export default Homes;
