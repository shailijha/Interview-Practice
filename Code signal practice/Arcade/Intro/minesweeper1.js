function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let board_length = rows * cols;
  let count = 0;
  let i = 0;
  let result = [];

  while (count < board_length) {
    let temp_result = [];
    for (let j = 0; j < cols; j++) {
      let num_mines = 0;
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

      diagonal.forEach(elem => {
        let i1 = elem[0];
        let j1 = elem[1];
        if (i1 < 0 || j1 < 0) return;
        else if (i1 == rows || j1 == cols) return;
        else num_mines += boolToNum(matrix[i1][j1]);
      });

      // console.log('diagonal addition ', num_mines);

      adjacent.forEach(elem => {
        let i1 = elem[0];
        let j1 = elem[1];
        if (i1 < 0 || j1 < 0) return;
        else if (i1 == rows || j1 == cols) return;
        else num_mines += boolToNum(matrix[i1][j1]);
      });

      // console.log('adjacent addition ', num_mines);

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

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]);
console.log('*******************');
minesweeper([
  [false, false, false],
  [false, false, false]
]);
console.log('*******************');
minesweeper([
  [true, false, false, true],
  [false, false, true, false],
  [true, true, false, true]
]);
console.log('*******************');
minesweeper([
  [true, true, true],
  [true, true, true],
  [true, true, true]
]);
console.log('*******************');
minesweeper([
  [true, false],
  [true, false],
  [false, true],
  [false, false],
  [false, false]
]);
