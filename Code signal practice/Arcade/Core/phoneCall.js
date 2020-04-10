function phoneCall(min1, min2_10, min11, s) {
  let num_minutes = 0;
  let bal = s;
  bal -= min1;
  if (bal >= 0) {
    num_minutes++;
    console.log(bal);
    if (bal > min2_10) {
      let temp = bal - 9 * min2_10;
      if (temp <= 0) {
        num_minutes += Math.floor(bal / min2_10);
      } else {
        num_minutes += 9;
        num_minutes += Math.floor(temp / min11);
      }
    }
  }
  return num_minutes;
}
