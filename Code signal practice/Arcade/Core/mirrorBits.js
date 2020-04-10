function mirrorBits(a) {
  //console.log(a.toString(2).split(''), a.toString(2).split('').reverse().join(''))
  return parseInt(a.toString(2).split('').reverse().join(''), 2);
}
