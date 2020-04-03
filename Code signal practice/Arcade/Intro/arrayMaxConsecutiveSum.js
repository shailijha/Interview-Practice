function arrayMaxConsecutiveSum(inputArray, k) {
  let sum = 0;
  let index = 0;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let temp_sum = inputArray.slice(0, k).reduce(reducer);

  // while(index + (k-1) < inputArray.length) {
  //     temp_sum = inputArray[index] + inputArray[index + (k-1)];
  //     console.log(index, sum, temp_sum);
  //     if(sum < temp_sum)
  //     {
  //         sum = temp_sum;
  //         soln_index = index;
  //     }
  //     index++;
  // }

  // let soln_array = inputArray.slice(soln_index, soln_index+k);
  // console.log(soln_array.reduce(reducer));
  // return soln_array.reduce(reducer);
}
