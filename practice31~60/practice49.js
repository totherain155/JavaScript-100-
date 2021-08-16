let result = "10 9 8 7 6 5 4 3 2 1";

// split(" ")로 배열로 반환한 뒤 map()로 정수형으로 반환한다.

result = result.split(" ").map((n) => parseInt(n, 10));

// sort
result = result.sort((a, b) => b - a);

console.log(result[0]);
