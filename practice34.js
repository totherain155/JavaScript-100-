const unsorted = prompt(" ");
let sorted = unsorted
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}
