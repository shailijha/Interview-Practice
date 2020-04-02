function variableName(name) {
  let name_split = name.split('');
  if (parseInt(name_split[0]) >= 0 || parseInt(name_split[0]) <= 9)
    return false;
  let char_regex = /[a-z0-9]/i;
  // let digit_regex = //;
  for (let index = 0; index < name_split.length; index++) {
    if (char_regex.test(name_split[index]) || name_split[index].trim() === '_')
      continue;
    else return false;
  }
  return true;
}
