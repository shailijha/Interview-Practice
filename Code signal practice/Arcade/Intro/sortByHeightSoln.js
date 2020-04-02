function sortByHeight(a) {
  if (a.length == 1 || (Math.min(...a) == Math.max(...a)) == -1) return a;
  else if (a.indexOf(-1) == -1) return a.sort((a, b) => a - b);
  else {
    console.log(a);
    let indexes = [];
    let index = 0;
    while (index < a.length) {
      if (a[index] == -1) {
        indexes.push(index);
        index++;
      } else index++;
    }

    a.sort((a, b) => a - b);
    console.log(indexes);
    let sorted_array = a.slice(a.lastIndexOf(-1) + 1);
    console.log(sorted_array);
    let result = [...sorted_array];
    for (let index = 0; index < indexes.length; index++) {
      result.splice(indexes[index], 0, -1);
    }
    console.log(result);
  }
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
