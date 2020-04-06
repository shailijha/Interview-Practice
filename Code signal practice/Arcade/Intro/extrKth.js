function extractEachKth(inputArray, k) {
  let index = 0;
  let result = [];
  while (index < inputArray.length) {
    if ((index + 1) % k != 0) result.push(inputArray[index]);
    index++;
  }
  return result;
}
