import "./App.css";
import React, { useState, useEffect } from "react";
import Homes from "./pages/Homes";
import News from "./pages/News";
import Prices from "./pages/Prices";
import Nav from "./components/Nav";
import Stats from "./pages/Stats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CryptoInfo from "./components/CryptoInfo";

//Fetching Crypto coins
function App() {
  const [topCryptos, setTopCryptos] = useState([]);
  const [cryptoNews, setCryptoNews] = useState([]);
  const [allCryptos, setAllCryptos] = useState([]);

  console.log(allCryptos);

  //TopCryptos
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1238215840msh86bee828410a6fep1520e3jsnbd184877cf3e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => setTopCryptos(response.data.coins));
  }, []);

  //All Cryptos
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1238215840msh86bee828410a6fep1520e3jsnbd184877cf3e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCryptos(response.data.coins));
  }, []);

  //CryptoNews
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q={cryptocurrency}&freshness=Day&textFormat=Raw&safeSearch=Off",
      options
    )
      .then((response) => response.json())
      .then((response) => setCryptoNews(response.value))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1238215840msh86bee828410a6fep1520e3jsnbd184877cf3e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Homes topCryptos={topCryptos} cryptoNews={cryptoNews} />}
          />
          <Route
            path="/prices"
            element={
              <Prices allCryptos={allCryptos} setAllCryptos={setAllCryptos} />
            }
          />
          <Route path="/stats" element={<Stats topCryptos={topCryptos} />} />
          <Route path="/news" element={<News cryptoNews={cryptoNews} />} />
          <Route path="/crypto/:coinid" element={<CryptoInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
