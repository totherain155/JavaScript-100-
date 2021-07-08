const nums = "1 2 3 4 5";

//문자열은 거꾸로 표기할 수 없기 때문에 일단 배열로 바꾸어준다.
//const arr = nums.split(" ");

//그 후 reverse method로 거꾸로 표기한다.
//const arr = nums.split(" ").reverse();

// 다시 문자열로 반환한다.
const arr = nums.split(" ").reverse().join(" ");

console.log(arr);

//let reverseNum = "";

/*
for (let i = 0; i < arr.length; i++) {
    reverseNum = reverseNum + (arr[i] + " ");
}

console.log(reverseNum)
*/
