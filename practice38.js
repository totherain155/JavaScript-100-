const scores = prompt("점수입력")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

scores.sort((a, b) => {
  return a - b;
});

let count = 0;
let arr = [];
