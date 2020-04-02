function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((elem, index) => {
    if (elem != elemToReplace) return;
    else inputArray[index] = substitutionElem;
  });
  return inputArray;
}
