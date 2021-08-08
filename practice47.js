const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

// set을 생성한 뒤 중복을 제거한다.
let result = new Set();

for (let key in people) {
  result = result.add(people[key]); // add를 통해 set객체에 추가한다.
}
console.log(result.size); // 5
