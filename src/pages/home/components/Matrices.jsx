import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Metrics = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Conversions",
        data: [60, 120, 90, 180, 150, 200],
        borderColor: "#7F3DFF",
        backgroundColor: "rgba(127,61,255,0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Website Visitors",
        data: [200, 300, 250, 400, 370, 450],
        borderColor: "#FF7F50",
        backgroundColor: "rgba(255,127,80,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <section className="py-20 flex justify-center items-center px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Real Metrics, Real Growth
        </h2>
        <p className="text-gray-600 text-lg">
          Track performance, conversions, and audience growth with clarity.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default Metrics;
