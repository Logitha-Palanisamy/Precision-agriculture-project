import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const getSensorData = () => API.get("/sensor-data");
export const getCropHealth = () => API.get("/crop-health");
export const getAlerts = () => API.get("/alerts");