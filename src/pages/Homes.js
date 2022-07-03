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
import { Link } from "react-router-dom";

const Homes = ({ topCryptos, cryptoNews, globalStats, topFive }) => {
  return (
    <>
      <Box
        className="home__container container "
        sx={{ backgroundColor: "var(--darkBlue)" }}
      >
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
              <Typography
                variant="body1"
                pb={2}
                sx={{ maxWidth: 600, color: "var(--lightBlue)" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                neque alias omnis fugit sed aperiam ipsa delectus dolorem
                incidunt quos?
              </Typography>
              <Link to="/subscribe">
                <Button size="large" sx={{ mr: 2 }} variant="contained">
                  Subscribe
                </Button>
              </Link>
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

      <Box
        sx={{
          backgroundColor: "var(--darkBlue)",
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box
              py={8}
              sx={{
                maxWidth: 900,
                margin: "0 auto",
                px: 2,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "var(--white)", fontWeight: 600 }}
              >
                Top Coins
              </Typography>
              <Typography
                variant="body1"
                pb={4}
                sx={{
                  color: "var(--lightBlue)",
                  maxWidth: 500,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt id quia eveniet voluptate eum minus?
              </Typography>
              <Link to="/coins">
                <Button size="large" sx={{ mr: 2 }} variant="contained">
                  View all coins
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box>
              <TopPerformers topCryptos={topFive} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Stats */}

      <Box
        sx={{
          backgroundColor: "var(--blue)",
          paddingTop: 10,
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
                maxHeight: { xs: 400, md: 350, lg: 400 },
                maxWidth: { xs: 400, md: 350, lg: 400 },
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
                pl: { xs: 5, sm: 8, md: 10, lg: 10, xl: 15 },
                pr: { xs: 5 },
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
              <Link to="/stats">
                <Button size="large" sx={{ mr: 2 }} variant="contained">
                  All statistics
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "var(--white)",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: 600, textAlign: "center", paddingBottom: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "var(--lightBlue)" }}
            >
              Top performing cryptos
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              porro autem dolorum magni maxime ab facere aliquam beatae
              aspernatur voluptate!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              key={globalStats?.data?.bestCoins[1]?.uuid}
              to={`/crypto/${globalStats?.data?.bestCoins[1]?.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  height: { xs: 120, md: 150, lg: 200 },
                  width: "auto",
                  backgroundColor: "var(--darkBlue)",
                  borderRadius: 3,
                  border: "2px solid var(--darkBlue)",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                  margin: 1,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={globalStats?.data?.bestCoins[1]?.iconUrl}
                  sx={{ height: "100%", padding: { xs: 2, lg: 5 } }}
                ></Box>
              </Box>
            </Link>
            <Link
              key={globalStats?.data?.bestCoins[0]?.uuid}
              to={`/crypto/${globalStats?.data?.bestCoins[0]?.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  height: { xs: 160, md: 190, lg: 240 },
                  width: "auto",
                  backgroundColor: "var(--darkBlue)",
                  borderRadius: 3,
                  border: "2px solid var(--darkBlue)",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                  margin: 1,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={globalStats?.data?.bestCoins[0]?.iconUrl}
                  sx={{ height: "100%", padding: { xs: 2, lg: 5 } }}
                ></Box>
              </Box>
            </Link>
            <Link
              key={globalStats?.data?.bestCoins[2]?.uuid}
              to={`/crypto/${globalStats?.data?.bestCoins[2]?.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  height: { xs: 80, md: 110, lg: 160 },
                  width: "auto",
                  backgroundColor: "var(--darkBlue)",
                  borderRadius: 3,
                  border: "2px solid var(--darkBlue)",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                  margin: 1,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={globalStats?.data?.bestCoins[2]?.iconUrl}
                  sx={{ height: "100%", padding: { xs: 2, lg: 5 } }}
                ></Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* 
News */}
      <Box>
        <Box
          sx={{
            backgroundColor: "var(--white)",
            paddingTop: 5,
            paddingBottom: 10,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  color: "var(--white)",
                  marginRight: { md: 2 },
                  paddingLeft: { xs: 5, sm: 8, md: 10, lg: 25, xl: 30 },
                  paddingRight: { xs: 5 },
                  marginTop: { xs: 10, md: 20 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "0.1rem",

                    color: "var(--lightBlue)",
                  }}
                  className="home__title"
                >
                  Stay up to date with all the latest news
                </Typography>
                <Typography variant="body1" sx={{ color: "var(--blue)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  neque alias omnis fugit sed aperiam ipsa delectus dolorem
                  incidunt quos?
                </Typography>
                <Link to="/news">
                  <Button size="large" variant="outlined">
                    All News
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { xs: 10, md: 2 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  maxWidth: 500,
                  color: "var(--lightBlue)",
                }}
                className="home__title"
              >
                Todays Top Story
              </Typography>
              <NewsCard
                article={cryptoNews[0]}
                width={370}
                height={400}
                color="var(--blue)"
                text="var(--white)"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* <Box container sx={{ backgroundColor: "var(--blue)" }}>
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
      </Box> */}
    </>
  );
};

export default Homes;
