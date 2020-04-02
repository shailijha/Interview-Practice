function sortByHeight(a) {
  if (a.length == 1 || (Math.min(...a) == Math.max(...a)) == -1) return a;
  else if (a.indexOf(-1) == -1) return a.sort((a, b) => a - b);
  else {
    let index = 0;
    let temp_index = -1;
    let num_rounds = 0;
    while (index < a.length) {
      // console.log(index);
      if (num_rounds == 3) break;
      if (index == a.length - 1) num_rounds++;
      if (a[index] < a[temp_index] && a[index] != -1 && temp_index != -1) {
        let temp = a[index];
        a[index] = a[temp_index];
        a[temp_index] = temp;
        temp_index = 0;
        index = 0;
      } else if (
        a[index] == -1 ||
        a[index] < a[index + 1] ||
        a[index + 1] == -1
      ) {
        if (a[index] != -1) temp_index = index;
        index++;
      } else if (a[index] > a[index + 1] && a[index + 1] != -1) {
        let temp = a[index];
        a[index] = a[index + 1];
        a[index + 1] = temp;
        //temp_index = index + 1;
        index = 0;
      }
      // console.log(a, temp_index);
    }
  }
  return a;
}
