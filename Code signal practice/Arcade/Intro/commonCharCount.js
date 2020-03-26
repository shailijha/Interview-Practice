function commonCharacterCount(s1, s2) {
  let counter = 0;
  let s1_split = s1.split('').sort();
  let s2_split = s2.split('').sort();
  console.log(s1_split);
  console.log(s2_split);
  let length = s1.length < s2.length ? s1.length : s2.length;
  console.log('length ', length);
  let index = 0;
  while (index < length) {
    //console.log('index ',index);
    if (
      s1_split[index] == s2_split[index] ||
      (s1_split[index] != s1_split[index - 1] &&
        s1_split[index] != s2_split[index] &&
        s1_split[index] == s2_split[index - 1])
    ) {
      //console.log(s1[index]);
      counter++;
    }
    index++;
  }
  return counter;
}
