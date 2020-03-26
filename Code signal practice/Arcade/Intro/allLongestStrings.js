function allLongestStrings(inputArray) {
  let result = [];
  let longest_str_len = 0;
  inputArray.forEach(str => {
    if (str.length > longest_str_len) {
      longest_str_len = str.length;
      result = [];
      result.push(str);
    } else if (str.length == longest_str_len) result.push(str);
  });
  return result;
}
