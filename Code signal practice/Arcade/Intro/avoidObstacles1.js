function avoidObstacles(inputArray) {
  inputArray.sort((a, b) => a - b);
  let start_coord = 0;
  let min_jump = inputArray[0] + 1;
  let next_coord = start_coord + min_jump;
  let index = 0;
  while (inputArray.length != 0) {
    if (inputArray[index] == next_coord || inputArray[index] == start_coord) {
      min_jump = inputArray[0] + 1;
      start_coord = 0;
      next_coord = start_coord + min_jump;
      continue;
    } else if (
      inputArray[index] > start_coord &&
      inputArray[index] < next_coord
    ) {
      inputArray.splice(index, 1);
    } else if (next_coord + min_jump > inputArray[index]) {
      start_coord = next_coord;
      next_coord = start_coord + min_jump;
    }
  }
  console.log('min_jump=', min_jump);
  return min_jump;
}
