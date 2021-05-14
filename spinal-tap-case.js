/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    let spiral = str.match(/[A-z][a-z]+/g);
    return spiral.join("-").toLowerCase();
}

const result = spinalCase("AllThe-small  Things_Teletubbies say Eh-oh");
console.log(result)
