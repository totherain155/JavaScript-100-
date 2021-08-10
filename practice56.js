const nationWidth = {
  Korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const w = nationWidth["Korea"];
delete nationWidth["Korea"]; // Korea를 삭제한채로 object 출력
console.log(w);
console.log(nationWidth);

const entry = Object.entries(nationWidth);
// object의 key와 value를 배열로 반환한다.
console.log(entry);

const values = Object.values(nationWidth);
// value만 따로 배열로 반환한다.
console.log(values);

// 비교할 값 저장
let gap = Math.max(...values);
console.log(gap);

// 가장 적은 격차가 있던 나라와 그 값을 저장
let item = [];

for (let i in entry) {
  //Math.abs()는 숫자의 절대값을 반환한다.
  // gap > math.abs()는 최소값을 찾는 알고리즘이다.
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item);
console.log(item[0], item[1] - w);
