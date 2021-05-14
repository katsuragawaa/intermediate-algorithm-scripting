/* Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

const result = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log(result);
