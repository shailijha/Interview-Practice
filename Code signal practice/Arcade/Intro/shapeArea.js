function shapeArea(n) {
  let area = 0;
  if (n == 1) return 1;
  else {
    let temp = 1;
    area += temp;
    while (temp != n) {
      area += 4;
      if (temp > 1) area += 4 * (temp - 1);
      temp++;
      //console.log('temp area ', area);
    }
  }
  return area;
}
