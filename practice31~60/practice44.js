let num = "1234";
let sum = 0;

while (num) {
  sum = sum + (num % 10);
  num = Math.floor(num / 10);
}
console.log(sum);
