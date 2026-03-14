import { useEffect,useState } from "react";
import { getAlerts } from "../services/api";

function Alerts(){

  const [alerts,setAlerts] = useState([]);

  useEffect(()=>{
    getAlerts().then(res=>{
      setAlerts(res.data);
    });
  },[])

  return(

    <div>

      <h1>Farm Alerts</h1>

      {alerts.map((alert,i)=>(
        <div key={i} style={{background:"red",color:"white",padding:"10px",margin:"10px"}}>
          {alert.message}
        </div>
      ))}

    </div>
  )
}

export default Alerts