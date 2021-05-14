/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog */

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        return str.replace(before, after.toTitleCase());
    }
    return str.replace(before, after.toLowerCase());
}

const result = myReplace("I think we should look up there", "up", "Down");
console.log(result);
