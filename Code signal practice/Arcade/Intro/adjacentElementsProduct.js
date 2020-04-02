function adjacentElementsProduct(inputArray) {
  let largest_product = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > largest_product)
      largest_product = inputArray[i] * inputArray[i + 1];
  }
  return largest_product;
}
