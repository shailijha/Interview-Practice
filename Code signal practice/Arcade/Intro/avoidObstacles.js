function avoidObstacles(inputArray) {
  inputArray.sort((a, b) => a - b);
  let start_coord = 0;
  let min_jump = 1;
  let next_coord = start_coord + min_jump;
  let index = 0;
  while (inputArray.length != 0) {
    console.log(
      'min_jump=',
      min_jump,
      ' start_coord=',
      start_coord,
      ' next_coord=',
      next_coord,
      ' inputArray',
      inputArray,
      ' index=',
      index
    );
    if (inputArray[index] == next_coord || inputArray[index] == start_coord) {
      min_jump += 1;
      start_coord = 0;
      next_coord = start_coord + min_jump;
      //break;
      continue;
    } else if (
      inputArray[index] > start_coord &&
      inputArray[index] < next_coord
    ) {
      inputArray.splice(index, 1);
      //index++;
    } else if (
      next_coord + min_jump > inputArray[index] ||
      inputArray[index] > start_coord
    ) {
      start_coord = next_coord;
      next_coord = start_coord + min_jump;
      //index = 0;
    }
  }
  console.log('min_jump=', min_jump);
}

// avoidObstacles([5, 3, 6, 7, 9]);
// avoidObstacles([2, 3]);
avoidObstacles([1, 4, 10, 6, 2]);
// avoidObstacles([19, 32, 11, 23]);
// avoidObstacles([1000, 999]);
