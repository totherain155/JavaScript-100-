const unsorted = prompt(" ")
const sorted = unsorted.split(" ").sort(function (a, b) {
    return a - b
}).join(" ")

console.log(sorted)

