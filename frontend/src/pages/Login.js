import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/farm-bg.jpg";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = () => {

const user = JSON.parse(localStorage.getItem("user"));

if(user && user.email === email && user.password === password){
navigate("/dashboard");
}else{
alert("Invalid Email or Password");
}

};

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundImage:`url(${bg})`,
backgroundSize:"cover",
backgroundPosition:"center"
}}>

<div style={{
position:"absolute",
top:0,
left:0,
right:0,
bottom:0,
background:"rgba(0,0,0,0.4)"
}}></div>

<div style={{
width:"380px",
background:"white",
padding:"40px",
borderRadius:"12px",
boxShadow:"0px 15px 40px rgba(0,0,0,0.4)",
textAlign:"center",
zIndex:1
}}>

<img
src={logo}
alt="logo"
style={{width:"70px",marginBottom:"10px"}}
/>

<h2 style={{marginBottom:"5px"}}>
AI Precision Agriculture
</h2>

<p style={{color:"gray",marginBottom:"25px"}}>
Smart Farming Platform
</p>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginBottom:"15px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginBottom:"20px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button
onClick={handleLogin}
style={{
width:"100%",
padding:"12px",
background:"#2e7d32",
color:"white",
border:"none",
borderRadius:"6px",
fontSize:"16px",
cursor:"pointer"
}}
>
Login
</button>

<p style={{marginTop:"15px"}}>
Don't have account? 
<span
onClick={()=>navigate("/signup")}
style={{color:"#2e7d32",cursor:"pointer"}}
>
 Sign Up
</span>
</p>

<p>
<span
onClick={()=>navigate("/forgot")}
style={{color:"#2e7d32",cursor:"pointer"}}
>
Forgot Password?
</span>
</p>

</div>

</div>

)

}

export default Login;