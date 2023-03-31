def rm_vowels(string):
    vowels = "aeiouAEIOU"
    return ''.join([char for char in string if char not in vowels])
string = input("Enter a string: ")
new_string = rm_vowels(string)
print(new_string)
