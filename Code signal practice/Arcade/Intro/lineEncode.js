function lineEncoding(s) {
  // s = s.split('').sort().join('');
  let result_string = '';
  let string_split = s.split('');
  let count = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index + 1] == s[index]) count++;
    else {
      let app_str = count > 0 ? count + 1 + s[index] : s[index];
      result_string += app_str;
      count = 0;
    }
  }
  return result_string;
}
