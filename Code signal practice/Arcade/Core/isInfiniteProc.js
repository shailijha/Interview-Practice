function isInfiniteProcess(a, b) {
  while (a !== b) {
    a += 1;
    b -= 1;
    if (a === b) return false;
    if (a > b) return true;
  }
  return false;
}
