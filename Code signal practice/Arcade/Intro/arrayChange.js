function arrayChange(inputArray) {
  let counter = 0;
  let i = 0;
  while (i + 1 < inputArray.length) {
    if (inputArray[i] < inputArray[i + 1]) {
      i++;
      continue;
    } else {
      let incr = inputArray[i] - inputArray[i + 1] + 1;
      counter += incr;
      inputArray[i + 1] += incr;
      i++;
    }
  }
  return counter;
}
