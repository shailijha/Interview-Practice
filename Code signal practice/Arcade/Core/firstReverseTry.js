function firstReverseTry(arr) {
  if (arr.length >= 2) {
    let first = arr.shift();
    let last = arr.pop();
    arr.unshift(last);
    arr.push(first);
  }
  return arr;
}
