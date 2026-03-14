import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background:"#2e7d32",padding:"10px"}}>
      <h2 style={{color:"white"}}>AI Precision Agriculture</h2>

      <ul style={{display:"flex",gap:"20px"}}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/sensor">Sensor Data</Link></li>
        <li><Link to="/map">Farm Map</Link></li>
        <li><Link to="/crop-health">Crop Health</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;