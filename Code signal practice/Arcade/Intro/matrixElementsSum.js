function matrixElementsSum(matrix) {
  let sum = 0;
  for (let index = 0; index < matrix.length; index++) {
    let temp = matrix[index];
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] == 0) {
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][j] = 0;
        }
        continue;
      } else sum += matrix[index][j];
    }
  }
  console.log(sum);
  return sum;
}
