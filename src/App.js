import "./App.css";
import React, { useState, useEffect } from "react";
import Homes from "./pages/Homes";
import News from "./pages/News";
import Prices from "./pages/Prices";
import Nav from "./components/Nav";
import Stats from "./pages/Stats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [topCryptos, setTopCryptos] = useState([]);
  console.log(topCryptos);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "",
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

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homes topCryptos={topCryptos} />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/stats" element={<Stats topCryptos={topCryptos} />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
