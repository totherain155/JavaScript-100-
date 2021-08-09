const n = "1 3 8 4 2 5".split(" ");

console.log(n);

n.sort((a, b) => a - b);

const solution = (n) => {
  for (let i = 0; i < n.length - 1; i++) {
    // length - 1 인 이유는 마지막 요소를 비교하기 위해서이다.
    if (Number(n[i]) + 1 !== Number(n[i + 1])) {
      return "NO";
    }
  }
  return "YES"; // for문이 다 돌아갈 경우
};

console.log(solution(n));
