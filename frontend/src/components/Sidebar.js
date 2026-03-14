import { Link } from "react-router-dom";

function Sidebar(){

  return(

    <div style={{
      width:"220px",
      height:"100vh",
      background:"#1b5e20",
      color:"white",
      padding:"20px"
    }}>

      <h2>Smart Farm</h2>

      <p><Link to="/dashboard">Dashboard</Link></p>
      <p><Link to="/sensor">Sensor Data</Link></p>
      <p><Link to="/map">Farm Map</Link></p>
      <p><Link to="/crop">Crop Health</Link></p>

    </div>

  )

}

export default Sidebar