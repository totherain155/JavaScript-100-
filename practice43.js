let decimal = 32;
let arrBinary = [];

while (decimal) {
  arrBinary.push(decimal % 2);
  decimal = Math.floor(decimal / 2);
}
console.log(arrBinary.reverse().join(""));
