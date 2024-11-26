import numpy as np
import time
from multiprocessing import Pool

# Create an array with 10,000 random numbers
array = np.random.rand(10000)

# Serial summation
start_time_serial = time.time()
serial_sum = np.sum(array)
end_time_serial = time.time()

serial_time = end_time_serial - start_time_serial

# Parallel summation using multiprocessing
def sum_part(arr):
    return np.sum(arr)

start_time_parallel = time.time()

# Divide the array into two parts
mid = len(array) // 2
part1 = array[:mid]
part2 = array[mid:]

# Use multiprocessing pool to sum in parallel
with Pool(2) as pool:
    results = pool.map(sum_part, [part1, part2])

parallel_sum = sum(results)
end_time_parallel = time.time()

parallel_time = end_time_parallel - start_time_parallel

# Print the results
print(f"Serial Sum: {serial_sum}, Time Taken: {serial_time:.6f} seconds")
print(f"Parallel Sum: {parallel_sum}, Time Taken: {parallel_time:.6f} seconds")

# Check if the sums are equal
assert np.isclose(serial_sum, parallel_sum), "Sums do not match!"
