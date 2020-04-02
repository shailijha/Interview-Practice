function commonCharacterCount(s1, s2) {
  let counter = 0;
  let length =
    s1.length == s2.length
      ? s1.length
      : s1.length > s2.length
      ? s2.length
      : s1.length;

  let s1_sort = s1.split('').sort();
  let s2_sort = s2.split('').sort();
  console.log('s1=', s1_sort.join(''), ' s2=', s2_sort.join(''));

  for (let index = 0; index < length; index++) {
    if (s1_sort[index] == s2_sort[index]) {
      s1_sort[index] = 0;
      s2_sort[index] = 0;
    } else if (
      s1_sort[index] == s2_sort[index - 1] ||
      s1_sort[index] == s2_sort[index + 1]
    )
      s1_sort[index] = 0;
    else s1_sort[index] = -1;
  }

  console.log(s1_sort, s2_sort);
  s1_sort.forEach(num => {
    if (num == -1) return;
    else if (num == 0) counter++;
  });
  console.log('number of common characters is ', counter);
}

// commonCharacterCount('aabcc', 'adcaa');
// console.log('**********');
// commonCharacterCount('abca', 'xyzbac');
// console.log('**********');
// commonCharacterCount('zzzz', 'zzzzzzz');
// console.log('**********');
// commonCharacterCount('a', 'b');
commonCharacterCount('abcdefghxyzttw', 'hgfedcbaabcwwt');
console.log('**********');
commonCharacterCount('aba', 'bb');
