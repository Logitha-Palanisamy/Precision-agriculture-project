import { Line } from "react-chartjs-2";

function SensorData() {

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Soil Moisture",
        data: [30, 45, 28, 50, 40],
        borderColor: "green"
      }
    ]
  };

  return (
    <div>
      <h1>Sensor Data</h1>
      <Line data={data} />
    </div>
  );
}

export default SensorData;