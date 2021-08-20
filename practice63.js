const user_s = "복잡한 세상 편하게 살자".split(" ");
let result = "";

console.log(user_s);

for (let i of user_s) {
  result += i[0];
}

console.log(result);
