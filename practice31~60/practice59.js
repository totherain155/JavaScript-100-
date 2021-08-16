const s = "hi";

const n = 25 + parseInt((s.length / 2, 10));

// 왼쪽 채우기
const left = s.padStart(n, "="); // 주어진 길이만큼 문자를 채워준다.
console.log(left);
console.log(left.length);

// 오른쪽 채우기
const right = left.padEnd(50, "=");
console.log(right);
console.log(right.length);
