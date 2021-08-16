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

// for(index in array )
// obj에 이름과 득표수를 담아준다.
for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

console.log(result);

//Object.keys(), reduce
winner = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
// Object.keys()는 object의 key들을 배열로 반환한다.

console.log(winner);

// 혜원(이)가 총 4표로 반장이 되었습니다. (이런식으로)

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
