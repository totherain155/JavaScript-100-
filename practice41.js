const prime = 1;

const primeFunc = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("No");
      return false; // 더이상 진행할 필요가 없기 때문에 함수를 종료시킨다.
    }
  }
  if (n === 1) {
    console.log("No");
    return false;
  }
  console.log("Yes");
};

primeFunc(prime);
