function magicalWell(a, b, n) {
  let amt = 0;
  for (let i = 0; i < n; i++) {
    amt += a * b;
    a += 1;
    b += 1;
  }
  return amt;
}
