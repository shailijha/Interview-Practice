function circleOfNumbers(n, firstNumber) {
  //console.log((firstNumber + n / 2));
  return firstNumber + n / 2 === n ? 0 : (firstNumber + n / 2) % n;
}
