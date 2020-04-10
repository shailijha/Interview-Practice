function arrayPacking(a) {
  a.forEach((num, index) => (a[index] = num.toString(2)));
  //console.log(a);
  let result = '';
  for (let index = a.length - 1; index >= 0; index--) {
    if (a[index].length < 8) {
      //let temp = '';
      while (a[index].length < 8) {
        a[index] = '0' + a[index];
      }
    }
    result += a[index];
  }
  //console.log(parseInt(result, 2));
  return parseInt(result, 2);
}
