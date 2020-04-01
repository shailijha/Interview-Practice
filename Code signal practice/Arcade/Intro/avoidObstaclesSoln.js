function avoidObstacles(inputArray) {
  inputArray.sort((a, b) => a - b);
  //   console.log(inputArray);
  let min_jump = 1;
  let index = 0;
  while (index < inputArray.length) {
    //   console.log(min_jump);
    if (inputArray[index] % min_jump !== 0) {
      //   inputArray.splice(index,1);
      index++;
      //   console.log('input Array after splicing ',inputArray);
    } else {
      min_jump++;
      index = 0;
      //   console.log('No splicing ',inputArray);
    }
  }
  //   console.log('min_jump=', min_jump);
  return min_jump;
}
