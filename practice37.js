const array = [
  "원범",
  "원범",
  "원범",
  "원범",
  "원범",
  "혜원",
  "혜원",
  "혜원",
  "혜원",
  "유진",
  "유진",
];

let result = {};
let winner = "";

for (index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

console.log(result);

winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});

console.log(winner);

console.log(`${winner}는(은) ${result[winner]}표를 획득하였습니다. `);