function reverseInParentheses(inputString) {
  let resultString = '';
  let index1 = inputString.indexOf('(');
  let index2 = inputString.indexOf(')');
  if (index1 == 0 && index2 == inputString.length - 1)
    resultString = reverseString(inputString);
  else {
    while (index1 != -1 && index2 != -1) {
      resultString = inputString.split('');
      let temp_index = resultString.indexOf(')', index2 + 1);
      let temp1 = [];
      if (index2 < temp_index) {
        temp1 = resultString.slice(index1, temp_index + 1);
      }
      console.log('temp1 ', temp1.join(''));
      temp1 = reverseString(temp1.join(''), true);
      let string_to_reverse = inputString.substring(index1, index2 + 1);
      // console.log('string_to_reverse ',string_to_reverse);
      let temp = reverseString(string_to_reverse);
      //console.log('temp ',temp);
      inputString = inputString.replace(string_to_reverse, temp);
      //console.log(inputString);
      index1 = inputString.indexOf('(');
      index2 = inputString.indexOf(')');
    }
    return inputString;
  }
  return resultString;
}

function reverseString(input, flag) {
  let reversed_string = '';
  if (!flag)
    reversed_string = input
      .substring(1, input.length - 1)
      .split('')
      .reverse()
      .join('');
  else {
    while (input.indexOf('(') != -1 && input.indexOf(')') != -1) {
      let temp_idx = input.indexOf('(');
      let temp_new_idx;
      if (input.indexOf('(', temp_idx + 1) != -1) {
        temp_new_idx = input.indexOf('(', temp_idx + 1);
        while (temp_new_idx > temp_idx) {
          temp_idx = temp_new_idx;
          temp_new_idx = input.indexOf('(', temp_idx + 1);
        }
        console.log(temp_new_idx);
      }
    }
  }
  // console.log('final string ',original.replace(string_to_reverse,reversed_string))
  return reversed_string;
}
