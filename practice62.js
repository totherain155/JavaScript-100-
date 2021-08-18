// 20190923

const user_s = "aacdddddddddfffffffffgghhh";
let result_s = "";
console.log(
  //a와 매칭되는 문자열을 전체에서 찾는다.
  `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
    user_s.match(/c/g).length
  }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
    user_s.match(/f/g).length
  }${user_s.match(/g/g).length}${user_s.match(/h/g).length}
  `
); // 20190923
