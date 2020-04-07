function fileNaming(names) {
  let file_map = new Map();
  for (let index = 0; index < names.length; index++) {
    let file = names[index];
    if (!file_map.has(file)) {
      file_map.set(file, 0);
    } else if (file_map.has(file)) {
      let version = file_map.get(file);
      version++;
      let new_file_name = `${file}(${version})`;
      names[index] = new_file_name;
      if (!file_map.has(names[index])) file_map.set(names[index], 0);
      file_map.set(file, version);
    }
  }
  console.log(file_map);
  return names;
}

console.log(fileNaming(['doc', 'doc', 'image', 'doc(1)', 'doc']));
console.log('************************');
console.log(
  fileNaming(['a(1)', 'a(6)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'])
);
console.log('************************');
console.log(
  fileNaming([
    'dd',
    'dd(1)',
    'dd(2)',
    'dd',
    'dd(1)',
    'dd(1)(2)',
    'dd(1)(1)',
    'dd',
    'dd(1)'
  ])
);

// if (names.indexOf(new_file_name) > -1) {
//   let temp = names[new_file_name];
//   let num = parseInt(
//     temp.slice(temp.lastIndexOf('(') + 1, temp.lastIndexOf(')'))
//   );
//   num++;
//   new_file_name = `${file}(${num})`;
//   file_map.set(file, num);
// } else {
//   file_map.set(file, version);
// }
