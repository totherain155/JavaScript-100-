const list = [1, 2, 2, 3, 4, 5, 5, 5, 6];


//set :  중복되지 않는 데이터를 저장하는 데이터 구조이다.

let setVal = new Set(list)
setVal.add(10); // 맨 끝에 10 추가 
setVal.delete(5); // 해당값 삭제 

console.log(setVal.has(6)) // 해당값이 있는지 boolean으로 return 


console.log(setVal)

/*

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};    // 객체를 생성하는 방식
3)  var x = new Set('javascript'); // set을 만드는 방식
4)  var x = new Set(range(5));   // 알수없는 메소드가 들어감
5)  var x = new Set(); //set을 만드는 방식

정답 3, 5

*/

