function isSmooth(arr) {
  let len = arr.length;
  let middle = 0;
  if (len % 2 == 1) middle = arr[Math.floor(len / 2)];
  else middle = arr[Math.floor(len / 2)] + arr[Math.floor(len / 2) - 1];
  //console.log(arr[0] === arr[len-1] === middle);
  return arr[0] === arr[len - 1] && arr[0] === middle ? true : false;
}
