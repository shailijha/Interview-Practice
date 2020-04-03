function reverseInParentheses(inputString) {
  console.log(inputString);
  let split_string = inputString.split('');
  let result = [];
  let index = 0;

  while (index < split_string.length) {
    if (split_string[index] != '(' && split_string[index] != ')') {
      result.push(split_string[index]);
      index++;
    } else if (split_string[index] == ')') index++;
    else {
      let temp_string = [];
      index++;
      while (index < split_string.indexOf(')', index)) {
        if (split_string[index] != '(') {
          temp_string.push(split_string[index]);
          index++;
        } else {
          let temp_index = split_string.indexOf('(', index);
          let end_index = split_string.indexOf(')', temp_index);
          temp_string.push(
            reverse(split_string.slice(temp_index + 1, end_index).join(''))
          );
          index = end_index;
        }
      }
      result.push(reverse(temp_string.join('')));
    }
  }
  console.log(result.join(''));
}

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

reverseInParentheses('(bar)');
reverseInParentheses('foo(bar)baz');
reverseInParentheses('foo(bar)baz(blim)');
reverseInParentheses('foo(bar(baz))blim');
