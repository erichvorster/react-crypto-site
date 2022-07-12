import React, { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import CryptoCard from "../components/CryptoCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import shiba from "../Assets/shiba.svg";
// import ethereum from "../Assets/ethereum.svg";
// import tether from "../Assets/tether.svg";
// import xrp from "../Assets/xrp.svg";
// import bitcoin from "../Assets/bitcoin.svg";
// import inch from "../Assets/1inch.svg";

const Coins = ({ allCryptos, setAllCryptos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptoList, setCryptoList] = useState(allCryptos);

  useEffect(() => {
    const filteredCryptos = allCryptos.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCryptoList(filteredCryptos);
  }, [cryptoList, searchTerm]);

  return (
    <>
      <Box
        component="form"
        sx={{
          backgroundColor: "var(--darkBlue)",
          display: "flex",
          justifyContent: "center",
          "& > :not(style)": { m: 1, width: "60ch" },
          position: "relative",
          paddingTop: 18,
        }}
        noValidate
        autoComplete="off"
      >
        {/* <Box component="img" src={shiba}></Box> */}
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: 8,
            color: "var(--white)",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <Typography variant="h4" sx={{ paddingBottom: 2, fontWeight: 600 }}>
            Search all the crypto coins and get all the latest statistics
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingBottom: 2, color: "var(--lightBlue)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          id="outlined-basic"
          label=" Search Cryptocurrency"
          variant="outlined"
          sx={{
            position: "absolute",
            top: { xs: 415, sm: 350 },
            backgroundColor: "var(--white)",
            borderRadius: 1,
            zIndex: 1,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            maxWidth: { xs: 350, sm: 700, md: 1000 },
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "var(--white)",
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          paddingLeft: { sm: 5, lg: 10 },
          paddingRight: { sm: 5, lg: 10 },
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {cryptoList.map((crypto) => {
            return (
              <Grid item md={4} lg={4} xl={3}>
                <Link
                  key={crypto.uuid}
                  to={`/crypto/${crypto.uuid}`}
                  style={{ textDecoration: "none" }}
                >
                  <CryptoCard crypto={crypto} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Coins;
