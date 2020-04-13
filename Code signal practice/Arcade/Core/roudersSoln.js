function rounders(n) {
  let result = [];
  let carry = 0;
  while (n > 10) {
    let rem = n % 10;
    rem += carry;
    if (rem >= 5) carry = 1;
    else carry = 0;
    result.push(0);
    //console.log(rem, carry);
    n = Math.floor(n / 10);
    //console.log(n);
  }
  n = n < 1 ? n * 10 + carry : n + carry;
  result.push(n);
  return parseInt(result.reverse().join(''));
}
