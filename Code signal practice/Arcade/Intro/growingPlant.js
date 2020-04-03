function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let num_days = 0;
  let current_height = 0;
  while (current_height <= desiredHeight) {
    console.log(current_height, num_days);
    current_height += upSpeed;
    if (current_height == desiredHeight || current_height > desiredHeight)
      return num_days + 1;
    current_height -= downSpeed;
    num_days++;
  }
}
