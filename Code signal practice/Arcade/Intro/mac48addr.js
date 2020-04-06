function isMAC48Address(inputString) {
  // let regex = /[0-9][A-F]/;
  // let regex1 = /[A-F][0-9]/;
  // let regex2 = /[0-9][0-9]/;
  // let regex3 = /[A-F][A-F]/;
  // let bool = regex.test(str) || regex1.test(str) || regex2.test(str) || regex3.test(str);
  //         if(!bool)
  //             return false;
  let split_string = inputString.split('-');
  console.log(split_string);

  if (split_string.length != 6) return false;
  else {
    for (let index = 0; index < split_string.length; index++) {
      let str = split_string[index].split('');
      console.log(str);
      if (str.length != 2) return false;
      else {
        for (let i = 0; i < str.length; i++) {
          let char_int = parseInt(str[i]);
          console.log(char_int);
          // console.log(char_int !== NaN);
          if (char_int || char_int == 0) {
            if (char_int < 0) return false;
          } else {
            if (
              split_string[index].charCodeAt(i) < 65 ||
              split_string[index].charCodeAt(i) > 70
            )
              return false;
          }
        }
      }
    }
    return true;
  }
}
