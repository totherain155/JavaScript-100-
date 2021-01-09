// 나눗셈 몫과 나머지 console.log 출력 

const number = prompt().split(' ')

const val1 = Math.floor(parseInt(number[0], 10) / parseInt(number[1], 10))

const val2 = parseInt(number[0], 10) % parseInt(number[1], 10)

console.log(val1, val2)

