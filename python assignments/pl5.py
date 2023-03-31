list1 = list(map(int, input("Enter first list of numbers separated by space: ").split()))
list2 = list(map(int, input("Enter second list of numbers separated by space: ").split()))
common = []
for num in list1:
    if num in list2 and num not in common:
        common.append(num)
print(common)
