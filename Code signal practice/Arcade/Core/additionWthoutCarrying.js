function additionWithoutCarrying(param1, param2) {
  param1 = param1.toString().split('');
  param2 = param2.toString().split('');
  console.log(param1, param2);
  let i = param1.length - 1;
  let j = param2.length - 1;
  let result = '';
  while (i >= 0 || j >= 0) {
    //console.log(param1[i], param2[j]);
    let temp = param1[i] === undefined ? 0 : parseInt(param1[i]);
    let temp1 = param2[j] === undefined ? 0 : parseInt(param2[j]);
    //console.log(temp, temp1);
    result += (temp + temp1) % 10;
    i--;
    j--;
  }
  // console.log(result);
  // console.log(parseInt(result.split('').reverse().join('')));
  return parseInt(result.split('').reverse().join(''));
}
