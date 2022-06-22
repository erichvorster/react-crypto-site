import React, { useState, useEffect } from "react";
import CryptoCard from "../components/CryptoCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Prices = ({ allCryptos, setAllCryptos }) => {
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
          backgroundColor: "var(--blue)",
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          id="outlined-basic"
          label=" Search Cryptocurrency"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "var(--blue)",
          display: "flex",
          justifyContent: "center",
          paddingTop: 5,
          paddingLeft: { sm: 5, lg: 10 },
          paddingRight: { sm: 5, lg: 10 },
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {cryptoList.map((crypto) => {
            return (
              <Grid item md={4} lg={4} xl={3}>
                <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
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

export default Prices;
