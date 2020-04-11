function secondRightmostZeroBit(n) {
  return Math.pow(
    2,
    n
      .toString(2)
      .split('')
      .reverse()
      .indexOf('0', n.toString(2).split('').reverse().indexOf('0') + 1)
  );
}
/*
let str = n.toString(2).split('').reverse();
let idx = str.indexOf('0');
let idx1 = str.indexOf('0', idx+1);
*/
