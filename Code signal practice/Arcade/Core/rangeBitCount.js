function rangeBitCount(a, b) {
  let count = 0;
  for (let num = a; num <= b; num++) {
    console.log(num.toString(2));
    count += num.toString(2).split(1).length - 1;
  }
  return count;
}
