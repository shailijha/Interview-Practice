function chessKnight(cell) {
  if (
    (cell[0] == 'a' && cell[1] == '1') ||
    (cell[0] == 'a' && cell[1] == '8') ||
    (cell[0] == 'h' && cell[1] == '1') ||
    (cell[0] == 'h' && cell[1] == '8')
  )
    return 2;
  else {
    let num_moves = 0;
    // let num_regex = /[1-8]/;
    // let char_regex = /[a-h]/;

    let horizontal_y = [parseInt(cell[1]) - 1, parseInt(cell[1]) + 1];
    let horizontal_x = [cell.charCodeAt(0) - 2, cell.charCodeAt(0) + 2];
    // let horizontal_x = [String.fromCharCode(cell.charCodeAt(0) - 2), String.fromCharCode(cell.charCodeAt(0) + 2)];
    console.log(horizontal_x, horizontal_y);

    let vertical_y = [parseInt(cell[1]) - 2, parseInt(cell[1]) + 2];
    let vertical_x = [cell.charCodeAt(0) - 1, cell.charCodeAt(0) + 1];
    // let vertical_x = [String.fromCharCode(cell.charCodeAt(0) - 1), String.fromCharCode(cell.charCodeAt(0) + 1)];
    console.log(vertical_x, vertical_y);

    for (let index = 0; index < horizontal_x.length; index++) {
      if (
        horizontal_x[index] >= 97 &&
        horizontal_x[index] <= 104 &&
        horizontal_y[0] >= 1 &&
        horizontal_y[0] <= 8
      )
        num_moves++;
      if (
        horizontal_x[index] >= 97 &&
        horizontal_x[index] <= 104 &&
        horizontal_y[1] >= 1 &&
        horizontal_y[1] <= 8
      )
        num_moves++;
      if (
        vertical_x[index] >= 97 &&
        vertical_x[index] <= 104 &&
        vertical_y[0] >= 1 &&
        vertical_y[0] <= 8
      )
        num_moves++;
      if (
        vertical_x[index] >= 97 &&
        vertical_x[index] <= 104 &&
        vertical_y[1] >= 1 &&
        vertical_y[1] <= 8
      )
        num_moves++;
    }

    return num_moves;
  }
}

// if(char_regex.test(horizontal_x[index])) {
//                 if(num_regex.test(horizontal_y[0]))
//                     num_moves++;
//                 if(num_regex.test(horizontal_y[1]))
//                     num_moves++;
//             }
// if(num_regex.test(vertical_y[index])) {
//                 if(char_regex.test(vertical_x[0]))
//                     num_moves++;
//                 if(char_regex.test(vertical_x[1]))
//                     num_moves++;
//             }
