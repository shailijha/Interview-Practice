function areSimilar(a, b) {
  let temp_a = [...a];
  let temp_b = [...b];
  let count = 0;

  if (
    JSON.stringify(temp_a.sort((a, b) => a - b)) !==
    JSON.stringify(temp_b.sort((a, b) => a - b))
  )
    return false;
  else if (JSON.stringify(a) === JSON.stringify(b)) return true;
  else {
    for (let index = 0; index < a.length; index++) {
      // console.log(index, count);
      if (count === 3) return false;
      else if (a[index] == b[index]) continue;
      else if (a[index] !== b[index]) count += 1;
      // console.log('count after ',count);
    }
  }
  return count < 3 ? true : false;
}
