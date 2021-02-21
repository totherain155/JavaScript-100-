//const keys = ["지디", "지팍"];
const keys = prompt().split(" ");
// split() -> 입력한 문자열을 배열로 반환한다.
const values = prompt().split(" ");
let obj = {}

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i]
}

console.log(obj)