function arrayMaxConsecutiveSum(inputArray, k) {
  let sum = 0;
  let index = 1;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let temp_sum = inputArray.slice(0, k).reduce(reducer);
  sum = temp_sum;
  //console.log(temp_sum);

  while (index < inputArray.length) {
    temp_sum = temp_sum - inputArray[index - 1] + inputArray[index + (k - 1)];
    // console.log(index, sum, temp_sum);
    if (sum < temp_sum) {
      sum = temp_sum;
    }
    index++;
  }
  console.log(sum);
}

arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2);
console.log('***********');
arrayMaxConsecutiveSum([2, 4, 10, 1], 2);
console.log('***********');
arrayMaxConsecutiveSum([1, 3, 2, 4], 3);
console.log('***********');
arrayMaxConsecutiveSum([3, 2, 1, 1], 1);
console.log('***********');
arrayMaxConsecutiveSum([1, 3, 4, 2, 4, 2, 4], 4);
console.log('***********');
arrayMaxConsecutiveSum(
  [
    963,
    741,
    22,
    851,
    399,
    382,
    190,
    247,
    494,
    452,
    891,
    532,
    795,
    920,
    465,
    831,
    344,
    391,
    582,
    897,
    763,
    951,
    735,
    806,
    320,
    702,
    200,
    59,
    870,
    345,
    695,
    321,
    817,
    83,
    416,
    36,
    914,
    335,
    117,
    985,
    690,
    303,
    875,
    556,
    292,
    309,
    496,
    791,
    509,
    360,
    235,
    784,
    607,
    341
  ],
  23
);
