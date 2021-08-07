const scores = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

let top3 = [];
// 중복 허용 3등까지 선물
let count = 0;
scores.sort((a, b) => a - b);

console.log(scores);

// 상위 3등까지 따로 배열에 저장
// pop, push 메소드 사용

while (top3.length < 4) {
  // top3.length< 3으로 하면 3등인 학생수가 여러명인데도 불구하고 그 중 한명만 들어가더라도 while문이 종료되는 문제가 발생한다.
  let val = scores.pop();
  if (!top3.includes(val)) {
    top3.push(val);
  }
  count++; // while문이 반복되는 횟수
}
console.log(count);
