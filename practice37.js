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

for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}
console.log(result);

winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});
// Object.keys() 객채의 key 값만 배열로 반환한다.
// reduce(a, b) 함수를 실행한 값을 a와 b에 계속 중첩을 한다.

console.log(winner);

console.log(`${winner}, ${result[winner]}표를 획득하다.`);
