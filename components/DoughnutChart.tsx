"use client";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: { accounts: DoughnutChartProps }) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2400, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2791fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };
  return (
    <Doughnut
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      data={data}
    />
  );
};

export default DoughnutChart;
