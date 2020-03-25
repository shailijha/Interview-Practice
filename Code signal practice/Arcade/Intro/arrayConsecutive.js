function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => {
    return a - b;
  });
  //console.log(statues);
  let num_stat = 0;
  for (let i = 0; i + 1 < statues.length; i++) {
    if (statues[i + 1] - statues[i] == 1) continue;
    else {
      //console.log(num_stat = (statues[i+1] - statues[i] - 1))
      num_stat += statues[i + 1] - statues[i] - 1;
    }
  }
  return num_stat;
}
