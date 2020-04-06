function differentSymbolsNaive(s) {
  s = s
    .split('')
    .sort()
    .join('');
  let unique_chars = [];
  for (let index = 0; index < s.length; index++) {
    if (unique_chars.indexOf(s[index]) == -1) unique_chars.push(s[index]);
  }
  return unique_chars.length;
}
