import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import millify from "millify";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import HTMLReactParser from "html-react-parser";
import DoughnutChart from "./DoughnutChart";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DoubleLeftOutlined } from "@ant-design/icons";

const CryptoInfo = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const [coinInfo, setCoinInfo] = useState();

  //Selector configuration

  const handleChange = (event) => {
    setTimePeriod(event.target.value);
  };

  console.log(coinInfo);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCoinInfo(response.data.coin))
      .catch((err) => console.error(err));
  }, [timePeriod]);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinInfo?.price && millify(coinInfo?.price)}`,
      icon: <DollarCircleOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "Rank",
      value: coinInfo?.rank,
      icon: <NumberOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "24h Volume",
      value: `$ ${coinInfo?.volume && millify(coinInfo?.volume)}`,
      icon: <ThunderboltOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinInfo?.marketCap && millify(coinInfo?.marketCap)}`,
      icon: <DollarCircleOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coinInfo?.allTimeHigh?.price && millify(coinInfo?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined style={{ color: coinInfo?.color }} />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinInfo?.numberOfMarkets,
      icon: <FundOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "Number Of Exchanges",
      value: coinInfo?.numberOfExchanges,
      icon: <MoneyCollectOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "Aprroved Supply",
      value: coinInfo?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "Total Supply",
      value: `$ ${coinInfo?.supply?.total && millify(coinInfo?.supply?.total)}`,
      icon: <ExclamationCircleOutlined style={{ color: coinInfo?.color }} />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinInfo?.supply?.circulating && millify(coinInfo?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined style={{ color: coinInfo?.color }} />,
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: "var(--blue)", paddingBottom: 10, paddingLeft: 2 }}
    >
      <Box
        sx={{
          backgroundColor: "var(--blue)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
            color: "var(--white)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" sx={{ color: `${coinInfo?.color}` }}>
              {coinInfo?.name}
            </Typography>
            <Typography variant="body1">
              {coinInfo?.name} price live in US Dollar
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{ height: 60, width: 60, marginLeft: 2 }}
            src={coinInfo?.iconUrl}
          ></Box>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ paddingTop: 8, gridGap: 15, justifyContent: "center" }}
        >
          <Grid item xs={12} sx={{ marginLeft: 4 }}>
            <Button variant="outlined">
              <Link to="/prices">
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "none", color: "var(--lightBlue)" }}
                >
                  <DoubleLeftOutlined />
                  Back to coins
                </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid
            item
            xs={11}
            md={6}
            sx={{
              border: "2px solid var(--darkBlue)",
              borderRadius: 2,
              padding: 5,
              backgroundColor: "var(--white)",
            }}
          >
            <Box sx={{ maxWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Time period
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timePeriod}
                  label="Time period"
                  onChange={handleChange}
                >
                  <MenuItem value={"3h"}>3 hours</MenuItem>
                  <MenuItem value={"24h"}>24 hours</MenuItem>
                  <MenuItem value={"7d"}>7 days</MenuItem>
                  <MenuItem value={"30d"}>30 days</MenuItem>
                  <MenuItem value={"1y"}>1 year</MenuItem>
                  <MenuItem value={"3m"}>3 months</MenuItem>
                  <MenuItem value={"3y"}>3 years</MenuItem>
                  <MenuItem value={"5y"}>5 years</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ maxWidth: 800 }}>
              <DoughnutChart coinInfo={coinInfo} />
            </Box>
          </Grid>

          <Grid
            item
            xs={11}
            md={5}
            sx={{
              border: "2px solid var(--darkBlue)",
              borderRadius: 2,
              backgroundColor: "var(--white)",
            }}
          >
            <Box>
              <Box sx={{ paddingTop: 5 }}>
                <Typography variant="h5">
                  {coinInfo?.name} value stats
                </Typography>
              </Box>
              <List sx={{ paddingTop: 1 }}>
                {stats?.map(({ icon, title, value }) => {
                  return (
                    <ListItem
                      sx={{
                        color: "var(--darkBlue)",
                        paddingTop: 2,
                        paddingBottom: 2,
                      }}
                    >
                      <ListItemButton
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Typography variant="body1" sx={{ paddingRight: 1 }}>
                            {icon}
                          </Typography>
                          <Typography variant="body1">{title}:</Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ color: `${coinInfo?.color}` }}
                        >
                          {value}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Grid>
          <Grid
            item
            xs={11}
            md={5}
            sx={{
              border: "2px solid var(--darkBlue)",
              borderRadius: 2,
              backgroundColor: "var(--white)",
            }}
          >
            <Box>
              <Box>
                <Typography variant="h6" sx={{ marginLeft: 4, paddingTop: 5 }}>
                  Market stats
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: 4 }}>
                  An overview of all cryptocurrency stats
                </Typography>
              </Box>
              <List>
                {genericStats?.map(({ icon, title, value }) => {
                  return (
                    <ListItem
                      sx={{
                        color: "var(--darkBlue)",
                        paddingTop: 2,
                        paddingBottom: 2,
                      }}
                    >
                      <ListItemButton
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Typography variant="body1" sx={{ paddingRight: 1 }}>
                            {icon}
                          </Typography>
                          <Typography variant="body1">{title}:</Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ color: `${coinInfo?.color}` }}
                        >
                          {value}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Grid>
          <Grid
            xs={11}
            md={6}
            sx={{
              padding: 7,
              border: "2px solid var(--darkBlue)",
              borderRadius: 2,
              backgroundColor: "var(--white)",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                {" "}
                More about {coinInfo?.name}
              </Typography>
              <Typography variant="body1">
                {HTMLReactParser(`${coinInfo?.description}`)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CryptoInfo;
