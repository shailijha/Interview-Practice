function alternatingSums(a) {
  let weight_sum1 = 0;
  let weight_sum2 = 0;
  a.forEach((num, idx) => {
    //console.log(num, idx);
    if (idx % 2 == 0) weight_sum1 += num;
    else weight_sum2 += num;
  });
  return Array.of(weight_sum1, weight_sum2);
}
