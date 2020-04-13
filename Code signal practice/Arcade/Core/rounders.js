function rounders(n) {
  n = n.toString().split('').reverse();
  console.log(n);
  let result = '';
  let carry = 0;
  let dig = 0;
  for (let idx = 0; idx < n.length; idx++) {
    dig = parseInt(n[idx]);
    dig += carry;
    if (dig >= 5) carry = 1;
    idx < n.length - 1
      ? (result += '0')
      : dig < 10
      ? (result += dig)
      : (result += '01');
  }
  //result += dig;
  console.log(result);
  return parseInt(result.split('').reverse().join(''));
}
