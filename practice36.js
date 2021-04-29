const num = prompt();
let result = "";

for (let i = 1; i <= 9; i++) {
  result = result + num * i + " ";
}

console.log(result);
