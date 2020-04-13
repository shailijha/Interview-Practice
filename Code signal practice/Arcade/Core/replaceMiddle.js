function replaceMiddle(arr) {
  let len = arr.length;
  if (len % 2 === 0) {
    let middle = arr[Math.floor(len / 2)] + arr[Math.floor(len / 2) - 1];
    arr.splice(Math.floor(len / 2) - 1, 2);
    arr.splice(arr.length / 2, 0, middle);
  }
  return arr;
}
