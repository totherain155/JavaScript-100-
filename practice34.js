const unSorted = prompt();

let sorted = unSorted
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (sorted === unSorted) {
  console.log("Yes");
} else {
  console.log("No");
}
