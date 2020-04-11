'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
  let result = [];
  let count = 0;
  let min = 0;
  while (arr.length != 0) {
    count = 0;
    if (arr.length == 1) {
      count++;
      result.push(count);
      break;
    }
    min = Math.min(...arr);
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === min) {
        arr.splice(index, 1);
        index--;
      } else arr[index] = arr[index] - min;
      count++;
    }
    result.push(count);
    // console.log(arr, count);
  }
  //console.log(count);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  let result = cutTheSticks(arr);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
