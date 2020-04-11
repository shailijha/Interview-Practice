function leastFactorial(n) {
  if (n == 0 || n == 1) return 1;
  else {
    let i = 2;
    while (true) {
      if (factorial(i) < n) i++;
      if (factorial(i) >= n) break;
    }
    return factorial(i);
  }
}

function factorial(n) {
  if (n == 1 || n === 0) return 1;
  return n * factorial(n - 1);
}
