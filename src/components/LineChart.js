import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const LineChart = ({ coinInfo }) => {
  console.log(coinInfo);

  var data = {
    labels: coinInfo?.name,
    datasets: [
      {
        label: "# of Votes",
        data: coinInfo?.sparkline,
        backgroundColor: coinInfo?.sparkline,
        borderColor: coinInfo?.sparkline,
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
