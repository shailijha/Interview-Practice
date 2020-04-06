function longestWord(text) {
  let longestWord = '';
  let long_length = 0;

  let regex = /[A-Z]/;
  let regex1 = /[a-z]/;

  let index = 0;
  while (index < text.length) {
    let char = text[index];
    // console.log(char, regex.test(char) || regex1.test(char));
    if (regex.test(char) || regex1.test(char)) {
      let temp_string = [char];
      index++;
      // console.log(regex.test(text[index]) || regex1.test(text[index]));
      while (
        regex.test(text[index]) ||
        (regex1.test(text[index]) && index < text.length)
      ) {
        temp_string.push(text[index]);
        index++;
      }
      // console.log(temp_string);

      if (temp_string.length > long_length) {
        long_length = temp_string.length;
        longestWord = temp_string.join('');
      }
    }
    index++;
  }
  // console.log(longestWord, long_length);
  return longestWord;
}
