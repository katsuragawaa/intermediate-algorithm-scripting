/* Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities. */

function convertHTML(str) {
    const escape = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    };

    return str.replace(/([&<>\"'])/g, match => escape[match])
}

result = convertHTML("Dolce & Gabbana");
console.log(result);
