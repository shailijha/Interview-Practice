function longestDigitsPrefix(inputString) {
  let regex = /[0-9]/;
  let result = [];
  if (!regex.test(inputString[0])) return '';
  for (let index = 0; index < inputString.length; index++) {
    if (regex.test(inputString[index])) result.push(inputString[index]);
    else break;
  }
  return result.join('');
}
