function evenDigitsOnly(n) {
  let digits = n.toString().split('');
  for (let index = 0; index < digits.length; index++) {
    if (parseInt(digits[index]) % 2 != 0) return false;
    else continue;
  }
  return true;
}
