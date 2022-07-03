import React from "react";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
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
          backgroundColor: "var(--lightBlue)",
          alignItems: "center",
        }}
      >
        <Box component="img" src={logo} sx={{ height: 40, width: 40 }}></Box>
        <Box
          sx={{ width: "30%", display: "flex", justifyContent: "space-around" }}
        >
          <Link to="/">Home</Link>
          <Link to="/coins">Coins</Link>
          <Link to="/stats">Stats</Link>
          <Link to="/news">News</Link>
          <Link to="/subscribe">Subscribe</Link>
        </Box>
        <Box
          sx={{ width: "5%", display: "flex", justifyContent: "space-around" }}
        >
          <TwitterOutlined />
          <InstagramOutlined />
          <FacebookOutlined />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
