// 배열 각 자리의 숫자 더하기

const arr = [];
let total = 0;

for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

console.log(arr);

arr.forEach((n) => {
  //각 배열의 item에 대해 함수를 실행하고 싶을 때 사용한다.
  while (n) {
    total = total + (n % 10);
    n = Math.floor(n / 10);
  }
});

console.log(total);
