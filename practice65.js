const a = [1, 4, 9, 16];
const b = ["a", "b", "c", "d"];

//  [[1, a], [b, 2], [3, c], [d, 4]] 형식으로 출력

let c = a.map((e, i) => {
  if (i % 2 == 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});
console.log(c);
