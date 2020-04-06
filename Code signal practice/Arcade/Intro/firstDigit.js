function firstDigit(inputString) {
  let regex = /[0-9]/;
  for (let index = 0; index < inputString.length; index++) {
    if (regex.test(parseInt(inputString[index]))) return inputString[index];
    else continue;
  }
}
