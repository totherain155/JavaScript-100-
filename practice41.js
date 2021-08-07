const prime = 1;

const primeFunc = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("No");
      return false;
    }
  }
  if (n === 1) {
    console.log("No");
    return false;
  }
  console.log("Yes");
};

primeFunc(prime);
