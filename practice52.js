function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // 길이가 1 이하인것은 바로 array를 return시킨다.
  }
  const pivot = arr[0];
  // 기준값을 첫번째값, 중앙값, 마지막값으로 지정하는 세 가지 방법이 있지만 여기선
  // 첫번째값으로 지정하여 진행한다.
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    // pivot 값이 arr[0]이기 때문에 i=1로 초기화를 시켜준다.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
  // cocat()를 통해 배열을 이어붙여준다.
}

const array = [1, 3, 2, 7, 5, 6, 4, 8];
console.log(array);

console.log(quickSort(array));
