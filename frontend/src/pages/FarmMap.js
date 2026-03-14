import { MapContainer, TileLayer, Marker } from "react-leaflet";

function FarmMap(){

  return(

    <MapContainer center={[11.0,78.0]} zoom={13} style={{height:"500px"}}>

      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[11.0,78.0]}/>

    </MapContainer>

  )

}

export default FarmMap