import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const DoughnutChart = ({ coinInfo }) => {
  var data = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    datasets: [
      {
        label: coinInfo?.sparkline,
        data: coinInfo?.sparkline,
        backgroundColor: coinInfo?.color,
        borderColor: coinInfo?.color,
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 2,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
        color: "#001e3c",
        fontColor: "#001e3c",
        labelColor: "#001e3c",
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#001e3c",
          fontColor: "#001e3c",
          fontSize: 18,
          stepSize: 0.5,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: "#001e3c",
          fontColor: "#001e3c",
          fontSize: 14,
          stepSize: 0.1,
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <Line height={400} data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
