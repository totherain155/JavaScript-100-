const comma = (n) => {
  if (n.length <= 3) {
    return n;
  }
  return comma(n.slice(0, n.length - 3)) + "," + n.slice(n.length - 3);
};

console.log(comma("123456789")); // 123,456,789
