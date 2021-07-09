const nums = "1 2 3 4 5";

//문자열은 거꾸로 표기할 수 없기 때문에 일단 배열로 바꾸어준다.
//const arr = nums.split(" ");

//그 후 reverse method로 거꾸로 표기한다.
//const arr = nums.split(" ").reverse();

// 다시 문자열로 반환한다.
const arr = nums.split(" ").reverse();
const toNumbers = arr.map((num) => Number(num));
console.log(toNumbers);

let sum = 0;

for (let i = 0; i < toNumbers.length; i++) {
  sum = sum + toNumbers[i];
}

console.log(sum);
