const num = prompt();
let result = 0;

for (let i = 1; i <= 9; i++) {
  result = result + num * i + " ";
}

console.log(result);
