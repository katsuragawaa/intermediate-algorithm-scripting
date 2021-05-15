/* A prime number is a whole number greater than 1 with exactly two divisors:
1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4. */

function sumPrimes(num) {
    const arr = [2];
    for (let i = 3; i <= num; i++) {
        if (isPrime(i)) arr.push(i);
    }
    console.log(arr[arr.length - 1]);
    return arr.reduce((sum, x) => sum + x, 0);

    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

result = sumPrimes(977);
console.log(result);
