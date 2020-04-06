function isIPv4Address(inputString) {
  let inputString_split = inputString.split('.');
  console.log(inputString_split);
  let result = true;

  if (inputString_split.length != 4 || inputString_split.indexOf('') != -1)
    return false;
  else {
    for (let index = 0; index < inputString_split.length; index++) {
      if (
        parseInt(inputString_split[index]) >= 0 &&
        parseInt(inputString_split[index]) <= 255
      ) {
        if (
          parseInt(inputString_split[index]).toString().length <
          inputString_split[index].length
        ) {
          result = false;
          break;
        }
      }
      if (
        parseInt(inputString_split[index]) < 0 ||
        parseInt(inputString_split[index]) > 255 ||
        !/^\d+$/.test(inputString_split[index])
      ) {
        result = false;
        break;
      }
    }
  }
  return result;
}
