function almostIncreasingSequence(sequence) {
  //console.log('sequence ', sequence);
  let counter = 0;
  let index = 0;

  while (index < sequence.length) {
    if (sequence[index] == sequence[index - 1]) {
      counter++;
      index++;
    } else if (sequence[index] < sequence[index - 1] && index > 0) {
      //console.log('index if ', index);
      counter++;
      if (counter > 1) break;
      else if (index - 1 === 0) sequence.splice(index - 1, 1);
      else if (
        sequence[index] < sequence[index - 2] ||
        sequence[index] === sequence[index - 2]
      ) {
        sequence.splice(index, 1);
      } else {
        sequence.splice(index - 1, 1);
      }
      index = index - 1;
      //console.log('conuter ', counter);
      //console.log(sequence, index);
    } else {
      index++;
      continue;
    }
  }
  return counter > 1 ? false : true;
}
//[1, 2, 5, 3, 5]

console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5])); //true
console.log();
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])); //true
console.log();
console.log(almostIncreasingSequence([3, 5, 67, 98, 3])); //true
console.log();
console.log(almostIncreasingSequence([1, 2, 1, 2])); //false
console.log();
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30])); //false
console.log();
console.log(almostIncreasingSequence([1, 3, 2, 1])); //false
console.log();
console.log(almostIncreasingSequence([1, 3, 2])); //true
console.log();
console.log(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])); //false

/*
[1, 2, 3, 4, 5, 3, 5, 6] o/p false
[1, 2, 3, 4, 3, 6] o/p true
[3, 5, 67, 98, 3] o/p true
*/

// for (; index < sequence.length; index++) {
//   console.log('outer index ', index);
//   if (sequence[index] == sequence[index - 1]) counter++;
//   else if (sequence[index] < sequence[index - 1] && index > 0) {
//     //console.log('index if ', index);
//     counter++;
//     if (counter > 1) break;
//     sequence.splice(index - 1, 1);
//     index = index - 1;
//     //console.log('conuter ', counter);
//     console.log(sequence, index);
//   } else continue;
// }
