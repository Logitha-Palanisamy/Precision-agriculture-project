import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgot() {

  const [email,setEmail] = useState("");

  const navigate = useNavigate();

  const handleReset = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email){
      alert("Password reset link sent to your email");
      navigate("/");
    }
    else{
      alert("Email not found");
    }

  };

  return (

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"linear-gradient(135deg,#1b5e20,#66bb6a)"
    }}>

      <div style={{
        width:"360px",
        padding:"40px",
        background:"white",
        borderRadius:"10px",
        boxShadow:"0px 10px 30px rgba(0,0,0,0.2)",
        textAlign:"center"
      }}>

        <h2>Reset Password</h2>

        <p style={{marginBottom:"20px"}}>
          Enter your registered email
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginBottom:"15px",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        <button
          onClick={handleReset}
          style={{
            width:"100%",
            padding:"12px",
            background:"#2e7d32",
            color:"white",
            border:"none",
            borderRadius:"5px",
            fontSize:"16px"
          }}
        >
          Reset Password
        </button>

        <p style={{marginTop:"15px"}}>

          Back to  

          <span
            onClick={()=>navigate("/")}
            style={{color:"green",cursor:"pointer"}}
          >
            Login
          </span>

        </p>

      </div>

    </div>

  );

}

export default Forgot;