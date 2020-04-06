function sumUpNumbers(inputString) {
  let sum = 0;
  let index = 0;
  while (index < inputString.length) {
    let char_num = parseInt(inputString[index]);
    if (char_num >= 0) {
      let num = [char_num];
      index++;
      let next = parseInt(inputString[index]);
      while (next >= 0 && index < inputString.length) {
        num.push(next);
        index++;
        next = parseInt(inputString[index]);
      }
      sum += parseInt(num.join(''));
    }
    index++;
  }
  return sum;
}
