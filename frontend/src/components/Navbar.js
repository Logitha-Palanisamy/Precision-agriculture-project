import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Smart Agriculture System</h2>

      <ul>
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