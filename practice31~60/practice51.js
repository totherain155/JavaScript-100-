// [1, 3, 5, 4, 8, 6, 7, 2]
// [1, 3, 5, 4] [8, 6, 7, 2]
// [1, 3], [5, 4], [8, 6], [7, 2]
// [1], [3], [5], [4], [8], [6], [7], [2]
//여기까지 분할

// [1, 3], [4, 5], [6, 8], [2, 7]
// [1, 3, 4, 5], [2, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8]
// 정렬하며 합치는 부분

// 분할부분
function mergeSort(arr) {
  if (arr.length <= 1) {
    // 정렬이 되어있는 상태
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid); //중간값까지
  const right = arr.slice(mid); // 중간값부터 오른쪽부분

  return merge(mergeSort(left), mergeSort(right));
  //재귀함수 이용 자르는 것을 반복한다. 그리고 merge 함수를 통해 합친다.
}

// 정렬하고 합치는 부분
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    //정렬해서 하나씩 추가하는 코드 작성
    if (left[0] < right[0]) {
      //항상 양쪽의 0번째 요소끼리 비교
      result.push(left.shift());
      // shift()는 0번째 위치의 요소를 제거하고 그 값을 반환한다.
      // 남아있는 배열은 0번째 요소를 제거하고 왼쪽으로 한칸씩 당긴다.
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    // left에 length가 남아 있다면 left를 그냥 추가해 주면 된다.
    result.push(left.shift());
  }
  while (right.length) {
    // right에 요소가 있다면 right를 추가한다.
    result.push(right.shift());
  }

  return result;
}

const array = "1 3 2 5 10 7 9".split(" ").map((n) => parseInt(n, 10));
// 편의상 array의 숫자를 정해둠

console.log(mergeSort(array));
