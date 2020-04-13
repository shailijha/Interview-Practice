function appleBoxes(k) {
  let num_yellow = 0;
  let num_red = 0;
  for (let num = 1; num <= k; num++) {
    if (num % 2 === 1) num_yellow += num * num;
    else num_red += num * num;
  }
  return num_red - num_yellow;
}
