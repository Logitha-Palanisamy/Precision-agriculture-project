import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    const user = {email,password};

    localStorage.setItem("user",JSON.stringify(user));

    alert("Account Created Successfully");

    navigate("/");

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

        <h2>AI Precision Agriculture</h2>

        <p>Create Your Account</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            margin:"10px 0",
            borderRadius:"5px",
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
            margin:"10px 0",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        <button
          onClick={handleSignup}
          style={{
            width:"100%",
            padding:"12px",
            marginTop:"10px",
            background:"#2e7d32",
            color:"white",
            border:"none",
            borderRadius:"5px",
            fontSize:"16px"
          }}
        >
          Sign Up
        </button>

        <p style={{marginTop:"15px"}}>

          Already have account?  

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

export default Signup;