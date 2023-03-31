x3 = input("Enter numbers: ").split()
x3 = [int(num) for num in x3]
n = 0
for num in x3:
    if num % 2 == 0:
        n += num
print("The sum of all even numbers  is:", n) 
