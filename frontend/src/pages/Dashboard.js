import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

const navigate = useNavigate();

return(

<div style={{display:"flex",height:"100vh",fontFamily:"Arial"}}>

{/* Sidebar */}

<div style={{
width:"220px",
background:"#1b5e20",
color:"white",
padding:"20px"
}}>

<h2>🌱 Farm AI</h2>

<p style={{marginTop:"30px",cursor:"pointer"}}>Dashboard</p>
<p style={{cursor:"pointer"}}>Sensor Data</p>
<p style={{cursor:"pointer"}}>Farm Map</p>
<p style={{cursor:"pointer"}}>Crop Health</p>

<p
style={{marginTop:"40px",cursor:"pointer"}}
onClick={()=>navigate("/")}>
Logout
</p>

</div>

{/* Main Content */}

<div style={{flex:1,padding:"30px",background:"#f4f6f8"}}>

<h1>Smart Agriculture Dashboard</h1>
<p>Welcome to AI Precision Agriculture System</p>

{/* Sensor Cards */}

<div style={{
display:"flex",
gap:"20px",
marginTop:"30px"
}}>

<div style={cardStyle}>
<h3>🌡 Temperature</h3>
<h2>27°C</h2>
</div>

<div style={cardStyle}>
<h3>💧 Soil Moisture</h3>
<h2>65%</h2>
</div>

<div style={cardStyle}>
<h3>🌫 Humidity</h3>
<h2>70%</h2>
</div>

</div>

{/* Graph Section */}

<div style={{
marginTop:"40px",
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0px 4px 10px rgba(0,0,0,0.1)"
}}>

<h3>Sensor Monitoring</h3>

<p>Graph visualization of temperature, humidity and soil moisture.</p>

</div>

{/* Crop Health */}

<div style={{
marginTop:"30px",
display:"flex",
gap:"20px"
}}>

<div style={cardStyle}>
<h3>🌾 Crop Health</h3>
<p>Status: Healthy</p>
</div>

<div style={cardStyle}>
<h3>🚜 Field Status</h3>
<p>Irrigation Required: No</p>
</div>

</div>

</div>

</div>

)

}

const cardStyle={
flex:1,
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0px 4px 10px rgba(0,0,0,0.1)"
}

export default Dashboard;