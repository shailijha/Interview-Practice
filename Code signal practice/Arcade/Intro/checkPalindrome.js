function checkPalindrome(inputString) {
  //console.log(inputString.split('').reverse().join(''));
  if (
    inputString ===
    inputString
      .split('')
      .reverse()
      .join('')
  )
    return true;
  else return false;
}
