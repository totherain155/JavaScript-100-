const user_s = "aaabbbbcdddd";

// 출력할 문자열
let result_s = " ";

// 저장할 문자열
let store_s = user_s[0];

let count = 0;

//result_s = a3b4c1d4

for (let i of user_s) {
  console.log(i);
  if (i == store_s) {
    count++;
  } else {
    result_s += store_s + String(count);
    store_s = i; // 저장되어 있는 문자열을 현재의 문자열로 바꿔준다.
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
