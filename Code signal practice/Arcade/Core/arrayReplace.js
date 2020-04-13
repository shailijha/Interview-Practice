function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((elt, idx) => {
    if (elt === elemToReplace) inputArray[idx] = substitutionElem;
  });
  return inputArray;
}
