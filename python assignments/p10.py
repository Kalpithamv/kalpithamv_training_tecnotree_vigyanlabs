# Ask the user for input and convert it to a list of strings
input_str = input("Enter a list of strings separated by spaces: ")
strings = input_str.split()

# Check each string to see if it is a palindrome
palindromes = []
for string in strings:
    if string == string[::-1]:
        palindromes.append(string)

# Print the list of palindromes
print("The palindromes in the list are:", palindromes)
