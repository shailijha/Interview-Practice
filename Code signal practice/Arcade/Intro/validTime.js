function validTime(time) {
  let time_split = time.split(':');
  if (parseInt(time_split[0]) < 0 || parseInt(time_split[0]) >= 24)
    return false;
  if (parseInt(time_split[1]) < 0 || parseInt(time_split[1]) > 59) return false;
  return true;
}
