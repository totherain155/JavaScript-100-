function bubble(arr) {
  let result = arr.slice(); // slice()에 전달인자가 없다면 앞의 배열을 똑같이 복사해서
  // 새로운 배열로 반환하게 된다.
  //여기서는 원본인 arr 배열을 건들지 않고 새로운 배열을 만들어 편집하려는 의도이다.

  for (let i = 0; i < result.length - 1; i++) {
    //length - 1인 이유는 비교를 하는 횟수가 item이 5개라면 4번만 비교하면 되기 때문이다.(인접아이템들을)
    for (let j = 0; j < result.length - i; j++) {
      //i를 빼준 이유는 아이템과 아이템을 비교할 때마다 맨 오른쪽의 숫자가 확정되어 가기 때문이다.
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = "5 7 13 8 1".split(" ").map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
