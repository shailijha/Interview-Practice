function alphabeticShift(inputString) {
  let input_split = inputString.split('');
  input_split.forEach((char, index) => {
    if (char == 'z') input_split[index] = 'a';
    else {
      let unicode = inputString.charCodeAt(index);
      unicode += 1;
      input_split[index] = String.fromCharCode(unicode);
    }
  });
  return input_split.join('');
}
