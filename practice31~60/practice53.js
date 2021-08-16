function mathBrackets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      //i번째의 괄호가 여는 괄호라면 count 하나를 증가시킨다.
      count++;
    }
    if (arr[i] === ")") {
      //i번째의 괄호가 닫는 괄호라면 count 하나를 감소시킨다.
      count--;
    } //다른 문자는 들어오지 않는다는 전제하에 진행하고 있다.
  }
  if (count !== 0) {
    return false;
  }
  // '())())
  let bracket = [];
  for (let i in arr) {
    if (arr[i] === "(") {
      bracket.push("(");
    }
    if (arr[i] === ")") {
      if (bracket.length === 0) {
        // ')'시점에서 bracket이 비어있었다면 이미 잘못된 문자열이다.
        return false;
      }
      bracket.pop(); // 짝이 맞아서 bracket array에서 없어진다
    }
  }
  return true; // 무사히 for문이 돌아가면 true를 반환한다.
}

const n = "()(())".split("");

console.log(mathBrackets(n));
