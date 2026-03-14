import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SensorChart({ data }) {

  const chartData = {
    labels: ["Mon","Tue","Wed","Thu","Fri"],
    datasets: [
      {
        label: "Soil Moisture",
        data: data,
        borderColor: "green",
        backgroundColor: "rgba(0,128,0,0.2)",
      }
    ]
  };

  return <Line data={chartData} />;
}

export default SensorChart;