function depositProfit(deposit, rate, threshold) {
  let num_years = 0;
  let new_bal = deposit;
  while (true) {
    if (new_bal >= threshold) break;
    else {
      deposit = new_bal;
      new_bal = deposit + (rate / 100) * deposit;
      num_years++;
      // console.log('deposit=',deposit,' new_bal=', new_bal);
    }
  }
  return num_years;
}
