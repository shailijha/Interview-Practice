function deleteDigit(n) {
  let max = 0;
  let num_split = n.toString().split('');
  //console.log(num_split);
  for (let index = 0; index < num_split.length; index++) {
    let temp = num_split.splice(index, 1);
    // console.log(temp, num_split);
    if (parseInt(num_split.join('')) > max) max = num_split.join('');
    num_split.splice(index, 0, ...temp);
    // console.log(num_split);
  }
  console.log(max);
  return parseInt(max);
}
