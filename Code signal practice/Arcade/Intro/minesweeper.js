function minesweeper(matrix) {
  let row_length = matrix[0].length;
  let column_length = matrix.length;
  let board_len = column_length * row_length;
  console.log('row length=', row_length, ' column length=', column_length);
  let count = 0;
  let i = 0;
  let j = 0;
  let result = [];

  while (count < board_len) {
    let temp_result = [];
    for (let j = 0; j < row_length; j++) {
      let num_mines = 0;
      console.log('i=', i, ' j=', j);
      let diagonal = [
        [i - 1, j - 1],
        [i + 1, j - 1],
        [i - 1, j + 1],
        [i + 1, j + 1]
      ];

      let adjacent = [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1]
      ];

      console.log(diagonal);
      console.log(adjacent);

      diagonal.forEach(element => {
        // console.log(element);
        let i1 = element[0];
        let j1 = element[1];
        if (i1 < 0 || j1 < 0) return;
        else if (
          (i1 == row_length || j1 == column_length) &&
          row_length == column_length
        )
          return;
        else if (i1 == row_length - 1 && row_length != column_length) return;
        else if (matrix[i1][j1] == undefined) return;
        else {
          num_mines += boolToNum(matrix[i1][j1]);
        }
      });

      console.log('diagonal addition ', num_mines);

      adjacent.forEach(element => {
        // console.log(element);
        let i1 = element[0];
        let j1 = element[1];
        if (i1 < 0 || j1 < 0) return;
        else if (
          (i1 == row_length || j1 == column_length) &&
          row_length == column_length
        )
          return;
        else if (i1 == row_length - 1 && row_length != column_length) return;
        else if (matrix[i1][j1] == undefined) return;
        else {
          num_mines += boolToNum(matrix[i1][j1]);
        }
      });
      console.log('adjacent addition ', num_mines);
      temp_result.push(num_mines);
      count++;
    }
    result.push(temp_result);
    i++;
  }
  console.log(result);
}

function boolToNum(bool) {
  return bool ? 1 : 0;
}

// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]);
// console.log('*******************');
// minesweeper([
//   [false, false, false],
//   [false, false, false]
// ]);
// console.log('*******************');
// minesweeper([
//   [true, false, false, true],
//   [false, false, true, false],
//   [true, true, false, true]
// ]);
// console.log('*******************');
// minesweeper([
//   [true, true, true],
//   [true, true, true],
//   [true, true, true]
// ]);
// console.log('*******************');
minesweeper([
  [true, false],
  [true, false],
  [false, true],
  [false, false],
  [false, false]
]);
