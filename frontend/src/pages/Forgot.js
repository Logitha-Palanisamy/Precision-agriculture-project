const handleReset = async () => {

await fetch("http://127.0.0.1:8000/forgot-password",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email})
});

alert("Reset link sent to your email");

}