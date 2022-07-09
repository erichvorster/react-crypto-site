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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Avatar from "@mui/material/Avatar";
import millify from "millify";
import { Container } from "@mui/material";
import { BottomNavigation } from "@mui/material";

const Stats = ({ topCryptos, globalStats }) => {
  console.log(topCryptos);

  return (
    <Box sx={{ margin: "0 auto", paddingTop: 10 }}>
      {/* Stats hero */}
      <Box sx={{ backgroundColor: "var(--darkBlue)" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  color: "var(--white)",
                  paddingLeft: { xs: 4, md: 10, lg: 7 },
                  paddingRight: 4,
                  textAlign: { xs: "center", md: "start" },
                  paddingBottom: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.1rem",
                    maxWidth: 700,
                    paddingTop: { xs: 5, md: 10, lg: 14 },
                  }}
                  pb={2}
                  className="home__title"
                >
                  Crypto statistics to help you gain the upper hand.
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
                <Link to="/prices" style={{ textDecoration: "none" }}>
                  <Button size="large" sx={{ mr: 2 }} variant="contained">
                    Search all coins
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{ padding: 10, textAlign: { xs: "center", md: "start" } }}
              >
                <Box component="img" src={stats} sx={{ maxWidth: 300 }}></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Top 10 coins */}
      <Box
        container
        sx={{
          backgroundColor: "var(--darkBlue)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          py={8}
          sx={{
            maxWidth: 900,
            px: 2,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "var(--white)", fontWeight: 600 }}
          >
            Top 10 coins
          </Typography>
          <Typography
            variant="body1"
            pb={4}
            sx={{
              color: "var(--lightBlue)",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id
            quia eveniet voluptate eum minus?
          </Typography>
          <TopPerformers topCryptos={topCryptos} />
        </Box>
      </Box>

      {/* Top Performing Cryptos */}
      <Box
        container
        sx={{
          backgroundColor: "var(--white)",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Container>
          <Box
            container
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
        </Container>
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
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            Top 10 market cap
          </Typography>
        </Box>
        <Box sx={{ minWidth: { xs: 400, md: 900 }, maxWidth: 900 }}>
          <PieChart topCryptos={topCryptos} />
        </Box>
      </Box>

      {/* Top 10 price*/}
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
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            Top 10 price per coin
          </Typography>
        </Box>
        <Box sx={{ minWidth: { xs: 400, md: 900 }, maxWidth: 900 }}>
          <BarChart topCryptos={topCryptos} />
        </Box>
      </Box>

      {/* Top 10 price change */}
      <Box
        container
        sx={{
          backgroundColor: "var(--blue)",
          paddingBottom: 15,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "var(--white)",
              paddingBottom: 8,
              fontWeight: 600,
              border: "2px solid var(--electricBlue)",
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 8,
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Top 10 current price and price change
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: 320, md: 640, lg: 950 },
          }}
        >
          {topCryptos.map((crypto) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ justifyContent: "center" }}
              >
                <Link
                  key={crypto?.uuid}
                  to={`/crypto/${crypto?.uuid}`}
                  style={{ textDecoration: "none" }}
                >
                  <PriceCard crypto={crypto} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Newest coins */}
      <Box
        container
        sx={{
          backgroundColor: "var(--blue)",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 2,
          paddingRight: 2,
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
          <Box
            sx={{
              maxWidth: 600,
              textAlign: "center",
              paddingBottom: 5,
              color: "var(--white)",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Newly launched coins
            </Typography>
            <Typography variant="body1" sx={{ color: "var(--lightBlue)" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              porro autem dolorum magni maxime ab facere aliquam beatae
              aspernatur voluptate!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              key={globalStats?.data?.newestCoins[1]?.uuid}
              to={`/crypto/${globalStats?.data?.newestCoins[1]?.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  height: { xs: 120, md: 150, lg: 200 },
                  width: "auto",
                  backgroundColor: "var(--white)",
                  borderRadius: 5,
                  border: "2px solid var(--darkBlue)",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                  margin: 1,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  },
                }}
              >
                {/* <Typography  variant="body1" sx={{color:"var(--darkBlue)", position:'absolute', padding:1}}>{globalStats?.data?.newestCoins[1]?.name}</Typography> */}
                <Box
                  component="img"
                  src={globalStats?.data?.newestCoins[1]?.iconUrl}
                  sx={{ height: "100%", padding: { xs: 2, lg: 5 } }}
                ></Box>
              </Box>
            </Link>
            <Link
              key={globalStats?.data?.newestCoins[0]?.uuid}
              to={`/crypto/${globalStats?.data?.newestCoins[0]?.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  height: { xs: 160, md: 190, lg: 240 },
                  width: "auto",
                  backgroundColor: "var(--white)",
                  borderRadius: 5,
                  border: "2px solid var(--darkBlue)",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                  margin: 1,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  },
                }}
              >
                {/* <Typography  variant="body1" sx={{color:"var(--darkBlue)", position:'absolute', padding:1}}>{globalStats?.data?.newestCoins[0]?.name}</Typography> */}
                <Box
                  component="img"
                  src={globalStats?.data?.newestCoins[0]?.iconUrl}
                  sx={{ height: "100%", padding: { xs: 2, lg: 5 } }}
                ></Box>
              </Box>
            </Link>
            <Link
              key={globalStats?.data?.newestCoins[2]?.uuid}
              to={`/crypto/${globalStats?.data?.newestCoins[2]?.uuid}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  height: { xs: 120, md: 150, lg: 200 },
                  width: "auto",
                  backgroundColor: "var(--white)",
                  borderRadius: 5,
                  border: "2px solid var(--darkBlue)",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                  margin: 1,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  },
                }}
              >
                {/* <Typography  variant="body1" sx={{color:"var(--darkBlue)", position:'absolute', padding:1,}}>{globalStats?.data?.newestCoins[2]?.name}</Typography> */}
                <Box
                  component="img"
                  src={globalStats?.data?.newestCoins[2]?.iconUrl}
                  sx={{ height: "100%", padding: { xs: 2, lg: 5 } }}
                ></Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Totals stats */}
      <Box
        container
        sx={{
          textAlign: "center",
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: "var(--lightBlue)",
          color: "var(--white)",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "var(--blue)", paddingBottom: 5, fontWeight: 600 }}
          >
            Global Crypto Stats
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={6} md={4} lg={2} sx={{ textAlign: "center" }}>
              <Typography variant="h6">Total 24h Volume</Typography>
              <Typography variant="h2">
                {millify(globalStats?.data?.total24hVolume)}
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{ textAlign: "center" }}>
              <Typography variant="h6">Total coins</Typography>
              <Typography variant="h2">
                {millify(globalStats?.data?.totalCoins)}
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{ textAlign: "center" }}>
              <Typography variant="h6">Total Exchanges</Typography>
              <Typography variant="h2">
                {millify(globalStats?.data?.totalExchanges)}
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{ textAlign: "center" }}>
              <Typography variant="h6">Total market cap</Typography>
              <Typography variant="h2">
                {millify(globalStats?.data?.totalMarketCap)}
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{ textAlign: "center" }}>
              <Typography variant="h6">Total Markets</Typography>
              <Typography variant="h2">
                {millify(globalStats?.data?.totalMarkets)}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Stats;
