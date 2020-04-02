function circleOfNumbers(n, firstNumber) {
  let temp = firstNumber + n / 2;
  return temp < n ? temp : temp - n;
}
