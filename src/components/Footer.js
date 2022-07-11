import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import logo from "../Assets/cloudcoin.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "20vh",
          display: "flex",
          backgroundColor: "var(--blue)",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={3}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{ height: 40, width: 40 }}
            ></Box>
          </Grid>
          <Grid
            item
            xs={10}
            md={6}
            sx={{
              textAlign: "center",
              width: 200,
              display: "flex",
              width: 200,
              justifyContent: "space-around",
              marginTop: 1,
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none", color: "var(--lightBlue)" }}
            >
              Home
            </Link>
            <Link
              to="/coins"
              style={{ textDecoration: "none", color: "var(--lightBlue)" }}
            >
              Coins
            </Link>
            <Link
              to="/stats"
              style={{ textDecoration: "none", color: "var(--lightBlue)" }}
            >
              Stats
            </Link>
            <Link
              to="/news"
              style={{ textDecoration: "none", color: "var(--lightBlue)" }}
            >
              News
            </Link>
            <Link
              to="/subscribe"
              style={{ textDecoration: "none", color: "var(--lightBlue)" }}
            >
              Subscribe
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <TwitterOutlined
                style={{
                  fontSize: "32px",
                  color: "var(--lightBlue)",
                  paddingRight: 15,
                  cursor: "pointer",
                }}
              />
              <InstagramOutlined
                style={{
                  fontSize: "32px",
                  color: "var(--lightBlue)",
                  paddingRight: 15,
                  cursor: "pointer",
                }}
              />
              <FacebookOutlined
                style={{
                  fontSize: "32px",
                  color: "var(--lightBlue)",
                  paddingRight: 15,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
