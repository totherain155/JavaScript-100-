const num = prompt();
let sum = ""

for (let i = 1; i <= 9; i++) {
    sum = sum + (i * num) + " "
}

console.log(sum)