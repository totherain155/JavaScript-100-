let n = 15;
let result = 0;
//7로 나누어지면 그 몫만큼 옮기면된다.
//처음에 7로 나누어지지않으면 7의 배수가 나올때까지
//3을 계속해서 빼준다.

while (true) {
  if (n % 7 == 0) {
    result += n / 7;
    console.log(result);
    break;
  }
  n = n - 3;
  result++;
  if (n < 0) {
    console.log(-1);
    break;
  }
}
