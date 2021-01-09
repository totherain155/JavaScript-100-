//  세개의 입력점수를 받아 평균 구하기 

const subject = prompt().split(' ')
let sum = 0

for (let i = 0; i < subject.length; i++) {
    sum = sum + parseInt(subject[i], 10)
}

console.log(Math.floor(sum / subject.length))



//Math floor 주어진 값보다 이하의 가장 큰 정수를 반환합니다.
// 예를들어 -70.333 인경우 -71이 반환된다.