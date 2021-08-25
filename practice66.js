const 전체블록 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const 규칙 = "ABD";

const solution = (전체블록, 규칙) => {
  //가능과 불가능 출력
  let answer = [];
  for (let 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙));
  }
  return answer;
};

const 블록순서체크 = (부분블록, 규칙) => {
  //indexOf 찾을 수 있는 첫번째 인덱스를 반환하고 없으면 -1을 반환한다.
  let 임시변수 = 규칙.indexOf(규칙[0]);
  //for of 배열 값 순환
  for (let 문자 of 부분블록) {
    if (규칙.includes(문자)) {
      if (임시변수 > 규칙.indexOf(문자)) {
        return "불가능";
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  return "가능";
};

console.log(solution(전체블록, 규칙));

// ABCDEF
// ABD
// 규칙에서의 index를 임시변수에 넣어놓는다.
// 매칭되는 index의 숫자가 증가한다면 규칙에 맞다고 볼수있다.
