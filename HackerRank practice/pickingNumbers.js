'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  a.sort((a, b) => a - b);
  let result = 0;
  for (let index = 0; index < a.length; index++) {
    let temp_subarray = 0;
    for (let j = index + 1; j < a.length; j++) {
      if (Math.abs(a[index] - a[j]) < 2) {
        if (j - index == 1) temp_subarray++;
        temp_subarray++;
      }
      if (index == 0) result = temp_subarray;
      else if (result < temp_subarray) result = temp_subarray;
    }
    //console.log(result);
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(aTemp => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + '\n');

  ws.end();
}
