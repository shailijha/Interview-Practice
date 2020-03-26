function isLucky(n) {
  //console.log();
  let n_string = n.toString().split('');
  let first_half_sum = 0;
  let second_half_sum = 0;
  for (let i = 0; i < n_string.length / 2; i++) {
    first_half_sum += parseInt(n_string[i], 10);
  }
  console.log(first_half_sum);
  for (let j = n_string.length / 2; j < n_string.length; j++) {
    second_half_sum += parseInt(n_string[j], 10);
    if (second_half_sum < first_half_sum) {
      console.log(second_half_sum);
      continue;
    } else if (second_half_sum > first_half_sum) return false;
  }
  return second_half_sum == first_half_sum ? true : false;
}
