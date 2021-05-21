/* Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
The answer here would be 6. */

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = new Array(max - min + 1).fill(0).map((_, n) => n + min);
  console.log(min, max);
  console.log(range);

  const maxDivisor = range.reduce((a, b) => a * b);
  console.log(maxDivisor);

  for (let multiple = max; multiple <= maxDivisor; multiple += max) {
    // console.log(`testing ${multiple}`);
    if (range.every((num) => multiple % num === 0)) {
      return multiple;
    }
  }
}

result = smallestCommons([24, 18]);

console.log("---");
console.log(result);
