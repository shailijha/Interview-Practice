function messageFromBinaryCode(code) {
  let message = '';
  let index = 0;
  while (index < code.length) {
    let char = String.fromCharCode(binToDec(code.slice(index, index + 8)));
    message += char;
    index += 8;
  }
  return message;
}

function binToDec(str) {
  let num = 0;
  let pow = 0;
  for (let index = str.length - 1; index >= 0; index--) {
    num += parseInt(str[index]) * Math.pow(2, pow);
    pow++;
  }
  return num;
}
