const prime = 11;

function primeFunc(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("no");
      return false;
    }
  }
}
