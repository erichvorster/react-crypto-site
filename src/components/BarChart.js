import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = ({ topCryptos }) => {
  var data = {
    labels: topCryptos.map((coin) => coin.name),
    datasets: [
      {
        label: "Price in USD",
        data: topCryptos.map((coin) => coin?.price),
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
      <Bar height={400} data={data} options={options} />
    </div>
  );
};

export default BarChart;
