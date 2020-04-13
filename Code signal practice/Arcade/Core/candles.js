function candles(candlesNumber, makeNew) {
  let num_can = candlesNumber;
  let rem = candlesNumber;
  let n1 = candlesNumber;
  let rem1 = 0;
  while (rem >= makeNew) {
    rem1 = n1 % makeNew;
    n1 = Math.floor(n1 / makeNew);
    num_can += n1;
    rem = rem1 + n1;
    n1 = rem;
  }
  return num_can;
}
