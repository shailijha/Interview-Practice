function arrayMaximalAdjacentDifference(inputArray) {
  let diff = 0;
  for (let index = 0; index <= inputArray.length - 1; index++) {
    let temp_diff = Math.abs(inputArray[index] - inputArray[index + 1]);
    if (diff < temp_diff) diff = temp_diff;
  }
  return diff;
}
