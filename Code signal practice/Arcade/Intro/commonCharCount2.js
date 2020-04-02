function commonCharacterCount(s1, s2) {
  console.log(s1, s2);
  let counter = 0;
  let s1_len = s1.length;
  let s2_len = s2.length;

  let s1_split = s1.split('');
  let s2_split = s2.split('');

  s1_split.forEach((char, index) => {
    s1_split[index] = s1.charCodeAt(index);
  });

  s2_split.forEach((char, index) => {
    s2_split[index] = s2.charCodeAt(index);
  });

  if (s1_len == s2_len || s1_len < s2_len) {
    for (let index = 0; index < s1_len; index++) {
      let char_present = s2_split.indexOf(s1_split[index]);
      if (char_present != -1) {
        s1_split[index] = 0;
        s2_split[char_present] = 0;
      } else s1_split[index] = -1;
    }

    s1_split.forEach(num => {
      if (num == -1) return;
      else if (num == 0) counter++;
    });
  } else if (s1_len > s2_len) {
    for (let index = 0; index < s2_len; index++) {
      let char_present = s1_split.indexOf(s2_split[index]);
      if (char_present != -1) {
        s2_split[index] = 0;
        s1_split[char_present] = 0;
      } else s2_split[index] = -1;
    }

    s2_split.forEach(num => {
      if (num == -1) return;
      else if (num == 0) counter++;
    });
  }

  console.log(s1_split, s2_split);
  console.log('number of common characters is ', counter);
}

commonCharacterCount('aabcc', 'adcaa');
console.log('**********');
commonCharacterCount('abca', 'xyzbac');
console.log('**********');
commonCharacterCount('zzzz', 'zzzzzzz');
console.log('**********');
commonCharacterCount('a', 'b');
commonCharacterCount('abcdefghxyzttw', 'hgfedcbaabcwwt');
console.log('**********');
commonCharacterCount('aba', 'bb');
