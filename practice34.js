const unsorted = prompt();
let sorted = "";

sorted = unsorted.split(" ").sort(function (a, b) {
    return a - b;
}).join(" ")
// split() : string => array


console.log(sorted)

if (unsorted === sorted) {
    console.log("yes")
} else {
    console.log("No")
}