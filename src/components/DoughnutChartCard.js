import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const DoughnutChart = ({ crypto }) => {
  var data = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    datasets: [
      {
        label: crypto?.sparkline,
        data: crypto?.sparkline,
        backgroundColor: crypto?.color,
        borderColor: crypto?.color,
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 26,
        color: "#001e3c",
        fontColor: "#001e3c",
        labelColor: "#001e3c",
      },
    },
    scales: {
      scaleId: {
        grid: {
          borderColor: "#001e3c",
        },
      },
      y: {
        ticks: {
          color: "#001e3c",
          fontColor: "#001e3c",
          fontSize: 18,
          stepSize: 9,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: "#001e3c",
          fontColor: "#001e3c",
          fontSize: 14,
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Box sx={{ height: 300, width: 300 }}>
      <Line height={1000} width={1000} data={data} options={options} />
    </Box>
  );
};

export default DoughnutChart;
