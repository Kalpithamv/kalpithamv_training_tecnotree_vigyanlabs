def decorator_timer(some_function):
    from time import time

    def wrapper(a,b):
        t1 = time()
        result = some_function(a,b)
        end = time()-t1
        return result, end
    return wrapper


@decorator_timer
def my_pow(a, b):
    res = a ** b
    return res
    

result,exec_time = my_pow(400000 , 500000)
print(exec_time) 
