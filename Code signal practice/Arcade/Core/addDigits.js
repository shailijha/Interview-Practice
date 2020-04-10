function addTwoDigits(n) {
  let sum = 0;
  let num_split = n.toString().split('');
  num_split.forEach((num) => {
    console.log(num);
    sum += parseInt(num);
  });
  return sum;
}
