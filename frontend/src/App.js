import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import SensorData from "./pages/SensorData";
import FarmMap from "./pages/FarmMap";
import CropHealth from "./pages/CropHealth";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sensor" element={<SensorData />} />
        <Route path="/map" element={<FarmMap />} />
        <Route path="/crop-health" element={<CropHealth />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>

    </Router>
  );
}

export default App;