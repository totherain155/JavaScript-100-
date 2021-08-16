const user_s = "aaabbbbcdddd";
let result_s = "";
let store_s = user_s[0];
let count = 0;

//aaabbbbcdddd
//result_s = a3b4c1d4

for (let i of user_s) {
  console.log(i);
  if (i == store_s) {
    count += 1;
  } else {
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}
result_s += store_s + String(count);

console.log(result_s);
