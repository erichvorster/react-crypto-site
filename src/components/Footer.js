import React from "react";
import { Box } from "@mui/material";
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
          justifyContent: "space-around",
          backgroundColor: "var(--blue)",
          alignItems: "center",
        }}
      >
        <Box component="img" src={logo} sx={{ height: 40, width: 40 }}></Box>
        <Box
          sx={{ width: "30%", display: "flex", justifyContent: "space-around" }}
        >
          <Link
            className="link switch"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            className="link switch"
            to="/coins"
            style={{ textDecoration: "none" }}
          >
            Coins
          </Link>
          <Link
            className="link switch"
            to="/stats"
            style={{ textDecoration: "none" }}
          >
            Stats
          </Link>
          <Link
            className="link switch"
            to="/news"
            style={{ textDecoration: "none" }}
          >
            News
          </Link>
          <Link
            className="link switch"
            to="/subscribe"
            style={{ textDecoration: "none" }}
          >
            Subscribe
          </Link>
        </Box>
        <Box
          sx={{ width: "5%", display: "flex", justifyContent: "space-around" }}
        >
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
      </Box>
    </>
  );
};

export default Footer;
