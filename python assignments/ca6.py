#//example of a simple decorator that prints a message before and after 

def my_decorator(func):
    def wrapper():
        print("Before function is called.")
        func()
        print("After function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# calling the decorated function
say_hello()

#//Check the output


#//Explaination:
#//After the function is called.
#//In the above example, my_decorator() is a function that takes another function as input and returns a new function (wrapper()) that
#//modifies the behavior of the original function (say_hello()). 
#//When we call say_hello(), the modified function is executed, and the message is printed before and after the original function is called.

