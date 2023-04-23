def test_is_prime():
    assert is_prime(7) == True

def is_prime(n):
    if n < 2:
        return False  

    for i in range(2, n):
        if n % i == 0:
            return False  

    return True  

def is_prime(num):
     if num < 2:
         return False
     for i in range(2, int(num**0.5)+1):
         if num % i == 0:
             return False
     return True


def test_is_prime():
    assert is_prime(2) == True
    assert is_prime(3) == True
    assert is_prime(5) == True
    assert is_prime(7) == True
    assert is_prime(11) == True
    assert is_prime(13) == True
     