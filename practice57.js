let s = "";
/*
for (let i = 0; i <= 11; i++) {
  s += i;
}
console.log(s); // 하나의 문자열로 늘어트리다.

let count = 0;
for (let k of s) {
  // 문자열을 하나씩 순회
  console.log(k);
  if (k == 1) {
    count++;
  }
}

console.log(count);
*/

for (let i = 0; i <= 11; i++) {
  s += i;
}
let count = 0;

for (let k in s) {
  console.log(k); // index를 순회한다.
  if (s[k] == 1) {
    count++;
  }
}
console.log(count);
