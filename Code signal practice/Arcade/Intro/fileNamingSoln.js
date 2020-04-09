function fileNaming(names) {
  let temp = [];
  names.forEach((name, index) => {
    //console.log(name, temp.indexOf(name) == -1);

    if (temp.indexOf(name) === -1) temp.push(name);
    else {
      let org = name;
      let counter = 1;
      name += `(${counter})`;
      if (temp.indexOf(name) > -1) {
        counter++;
        name = `${org}(${counter})`;
        while (temp.indexOf(name) > -1) {
          counter++;
          name = `${org}(${counter})`;
        }
      }
      temp.push(name);
      names[index] = name;
    }
  });
  return names;
}
