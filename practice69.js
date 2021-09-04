let prime = [];
let isPrime = true;
let val = 100;
let 골드바흐파티션 = [];

for (let i = 2; i < val; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    prime.push(i);
  }
  isPrime = true;
}

for (let n of prime) {
  if (prime.includes(val - n) && n <= val - n) {
    골드바흐파티션.push([n, val - n]);
  }
}

console.log(prime);

let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);

console.log(골드바흐파티션);
console.log(차);

// 배열에서 가장 작은값이나 큰값을 구하기위해선 apply함수가 필요하다.
const 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];
const 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];

console.log(큰값, 작은값);
