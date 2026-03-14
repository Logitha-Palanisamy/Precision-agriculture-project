import numpy as np
import cv2


def calculate_ndvi(image_file):

    file_bytes = np.frombuffer(image_file.file.read(), np.uint8)

    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

    # simulate NIR and RED bands
    nir = img[:, :, 0].astype(float)
    red = img[:, :, 2].astype(float)

    ndvi = (nir - red) / (nir + red + 0.001)

    return float(np.mean(ndvi))