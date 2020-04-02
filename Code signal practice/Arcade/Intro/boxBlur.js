const reducer = (accumulator, currentValue) => accumulator + currentValue;

function boxBlur(image) {
  console.log(image);
  console.log();
  let result = [];
  if (image.length == 3 && image[0].length == 3) {
    let temp = 0;
    image.forEach(arr => {
      temp += arr.reduce(reducer);
    });
    temp = Math.floor(temp / 9);
    result.push(Array.of(temp));
  } else {
    let candidates = [];
    let horz_limit = image[0].length;
    let ver_limit = image.length;
    console.log(horz_limit, ver_limit);
    let sum = 0;
    let temp_hor_limit1 = 0;
    let temp_hor_limit2 = 0;
    let i = 0;
    while (temp_hor_limit2 < horz_limit) {
      let j = i;
      if (temp_hor_limit2 < horz_limit) j = 0;
      temp_hor_limit1 = i;
      temp_hor_limit2 = i + 3;
      while (j < 3) {
        sum += image[j].slice(temp_hor_limit1, temp_hor_limit2).reduce(reducer);
        candidates.push(sum);
        sum = 0;
        j++;
      }
      i++;
      sum = 0;
    }
    console.log(candidates);
  }
  console.log(result);
  return result;
}

boxBlur([
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]
]);
console.log('************');
boxBlur([
  [0, 18, 9],
  [27, 9, 0],
  [81, 63, 45]
]);
console.log('************');
boxBlur([
  [36, 0, 18, 9],
  [27, 54, 9, 0],
  [81, 63, 72, 45]
]);
