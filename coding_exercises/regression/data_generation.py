import numpy as np

def generate_data(n_datapoints: int = 10000):
    x_1 = generate_random_walk(n_datapoints=n_datapoints, sigma=0.5)
    x_2 = generate_random_walk(n_datapoints=n_datapoints, sigma=0.7)
    x_3 = generate_random_walk(n_datapoints=n_datapoints, sigma=0.2)
    y = generate_target(x_1, x_2, x_3)
    return x_1, x_2, x_3, y
        

def generate_random_walk(n_datapoints: int = 10000, sigma: float = 1.0):
    data = [0]
    for i in range(n_datapoints):
        X_i = data[-1] + sigma * np.random.normal()
        data.append(X_i)
    return data

def generate_target(x_1, x_2, x_3, sigma: float = 1.0):
    y = []
    for i in range(len(x_1)):
        y.append(1.6 * x_1[i] - 0.01 * x_2[i] ** 2 + 20 * np.sin(x_3[i]) + sigma * np.random.normal())
    return y
