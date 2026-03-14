import { Line } from "react-chartjs-2";

function SensorData(){

  const data = {
    labels:["Mon","Tue","Wed","Thu","Fri"],
    datasets:[
      {
        label:"Soil Moisture",
        data:[40,45,38,50,48],
        borderColor:"green"
      }
    ]
  }

  return(
    <div>

      <h2>Sensor Monitoring</h2>

      <Line data={data}/>

    </div>
  )

}

export default SensorData