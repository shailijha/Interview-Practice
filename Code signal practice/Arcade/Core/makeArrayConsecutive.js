function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b);
  let num_stat = 0;
  for (let idx = 0; idx < statues.length - 1; idx++) {
    if (statues[idx + 1] - statues[idx] !== 1) {
      num_stat += statues[idx + 1] - statues[idx] - 1;
      console.log(num_stat);
    }
  }
  return num_stat;
}
