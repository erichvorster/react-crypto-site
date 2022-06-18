import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const LineChart = ({ topCryptos }) => {
  console.log(topCryptos);

  var data = {
    labels: topCryptos.map((coin) => coin.name),
    datasets: [
      {
        label: "# of Votes",
        data: topCryptos.map((coin) => coin.marketCap),
        backgroundColor: topCryptos.map((coin) => coin.color),
        borderColor: topCryptos.map((coin) => coin.color),
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Doughnut height={400} data={data} options={options} />
    </div>
  );
};

export default LineChart;
