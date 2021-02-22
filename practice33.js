const nums = "1 2 3 4 5";
const arr = prompt().split(" ").reverse();
let reverseVal = "";

for (let i = 0; i < arr.length; i++) {
    reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal)