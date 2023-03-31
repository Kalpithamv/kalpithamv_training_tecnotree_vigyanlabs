str = input("Enter a list of numbers separated by spaces: ")
numbers = [int(num) for num in str.split()]
num_sorted = sorted(numbers)
length = len(num_sorted)
if length % 2 == 0:
    median = (num_sorted[length//2 - 1] + num_sorted[length//2]) / 2
else:
    median = num_sorted[length//2]
print("The median value of the list is:", median)
