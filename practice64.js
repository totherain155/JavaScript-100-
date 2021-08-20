let n = 12;
let result = 0;
//7로 나누어지면 그 몫만큼 옮기면된다.
while (true) {
  if (n % 7 == 0) {
    result += parseInt(n / 7, 10);
    console.log(result);
    break;
  }
  n -= 3;
  result++;
  if (n < 0) {
    console.log(-1);
    break;
  }
}
