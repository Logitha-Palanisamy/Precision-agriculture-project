import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FarmMap() {
  return (
    <div>
      <h1>Farm Location</h1>

      <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: "400px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[19.0760, 72.8777]}>
          <Popup>Farm Location</Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}

export default FarmMap;