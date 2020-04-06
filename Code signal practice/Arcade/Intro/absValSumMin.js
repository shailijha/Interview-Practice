function absoluteValuesSumMinimization(a) {
  let result = 0;
  let sum = 0;
  for (let index = 0; index < a.length; index++) {
    let x = a[index];
    let temp_sum = 0;
    for (let j = 0; j < a.length; j++) {
      temp_sum += Math.abs(a[j] - x);
    }
    //console.log(temp_sum);
    if (index == 0 || sum > temp_sum) {
      result = a[index];
      sum = temp_sum;
    }
    //console.log(index, result);
  }
  return result;
}
