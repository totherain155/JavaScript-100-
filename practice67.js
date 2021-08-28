const solution = (n) => {
  let 사람 = 0;
  let 총악수 = 0;
  let temp = 0;
  while (true) {
    총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);

    if (n < 총악수) {
      break;
    }
    //break 되어서 빠져나오기 전 총악수의 갯수를 갖고 있어야 한다.
    temp = 총악수;
    //break 되기전 사람 숫자의 연산이 되어야 한다.
    사람 += 1;
  }
  return [Number(n - temp), 사람];
};

const 악수의수 = 59;
console.log(solution(악수의수)); //  [4, 12]

//const 참가자 = ["a", "b", "c", "d"];

// 입력 : 59
// (n-1)(n)/2
// 11명 참가자일 때 55
// 민규가 4번의 악수

//3
// ['a', 'b']
// ['a', 'c']
// ['a', 'd']

//2
// ['b', 'c']
// ['b', 'd']

//1
// ['c', 'd']

// 참가자 == n  (나중엔 n + 1으로 민규가 포함되고 민규는 별도로 악수를 했다고 생각하자. )
// 악수의 수 = n-1 + n-2 + n-3 ... 1

// 참가자가 101명이라고 가정할 때
// 100 + 99 + 98 + ... 3 + 2 + 1 == 101 * 50 == 5050
// n * ((n-1)/2)
