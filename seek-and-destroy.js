/* You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr, ...args) {
    return arr.filter((item) => !args.includes(item));
}

const result = destroyer(["tree", "hamburger", 53], "tree", 53);
console.log(result);
