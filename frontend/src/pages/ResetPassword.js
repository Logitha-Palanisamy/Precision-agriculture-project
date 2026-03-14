import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword(){

const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleReset = () => {

const user = JSON.parse(localStorage.getItem("user"));

user.password = password;

localStorage.setItem("user",JSON.stringify(user));

alert("Password Updated Successfully");

navigate("/");

}

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#1b5e20,#66bb6a)"
}}>

<div style={{
background:"white",
padding:"40px",
borderRadius:"10px",
width:"350px",
textAlign:"center"
}}>

<h2>Set New Password</h2>

<input
type="password"
placeholder="Enter New Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"10px",
margin:"10px 0"
}}
/>

<button
onClick={handleReset}
style={{
width:"100%",
padding:"10px",
background:"#2e7d32",
color:"white",
border:"none"
}}
>
Update Password
</button>

</div>
</div>

)

}

export default ResetPassword;