function addBorder(picture) {
  let edge = picture[0].length + 2;
  let result = [];
  result.push(addEdgeBorder(edge));
  picture.forEach(element => {
    result.push('*' + element + '*');
  });
  result.push(addEdgeBorder(edge));
  return result;
}

function addEdgeBorder(num) {
  let temp = '';
  for (let index = 0; index < num; index++) temp += '*';
  return temp;
}
