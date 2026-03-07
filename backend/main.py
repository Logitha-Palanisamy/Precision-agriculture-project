from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Precision Agriculture Backend Running"}

@app.get("/sensor-data")
def sensor_data():
    return {
        "soil_moisture": 35,
        "temperature": 26,
        "humidity": 60
    }