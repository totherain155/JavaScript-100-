var n = "거꾸로"

// 거꾸로 출력되는 프로그램 

console.log(n.split('').reverse().join(''))

/* split은 문자열을 배열로 반환하는 함수이다.
   ' '처럼 공백을 넣게되면 문자 하나하나를 원소에 담아
   배열로 반환을 하게 된다.

   배열을 문자열로 바꿀때는 join이란 함수를 이용하면 된다.
   ' '처럼 공백을 넣게되면 배열의 원소들을 다 붙여서 문자열로 반환한다.
*/