function digitDegree(n) {
  if (n.toString().length == 1) return 0;
  else {
    let count = 0;
    n = n.toString().split('');
    while (parseInt(n.join('')) >= 10) {
      let temp_sum = 0;
      n.forEach(num => (temp_sum += parseInt(num)));
      console.log(temp_sum);
      count++;
      n = temp_sum.toString().split('');
    }
    return count;
  }
}
