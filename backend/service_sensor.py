import random

def get_sensor_data():

    return {
        "soil_moisture": random.randint(20, 60),
        "temperature": random.randint(20, 40),
        "humidity": random.randint(40, 80)
    }