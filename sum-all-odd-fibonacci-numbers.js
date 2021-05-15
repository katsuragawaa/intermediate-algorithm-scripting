/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
    const fibArray = fib([1, 1], num, num);
    console.log(fibArray);
    return fibArray.filter((odd) => odd % 2).reduce((sum, i) => sum + i, 0);

    function fib(arr, n, max) {
        const len = arr.length;
        console.log(arr[len - 1], max);
        if (arr[len - 1] > max) return arr.slice(0, len - 1);
        arr.push(arr[len - 1] + arr[len - 2]);
        return fib(arr, n - 1, max);
    }
}

result = sumFibs(4);
console.log(result);
