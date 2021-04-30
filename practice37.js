const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = "";

for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

// {원범 : 2, 혜원 : 1}

//console.log(result)

winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b);
  return result[a] > result[b] ? a : b;
});

console.log(`승자는 ${winner}`);
