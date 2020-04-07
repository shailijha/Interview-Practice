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

// Complete the minimumDistances function below.
function minimumDistances(a) {
  let min_dist = -1;
  a.forEach((num, index) => {
    let temp = a.indexOf(num, index + 1);
    if (temp > -1) {
      let idx_diff = Math.abs(temp - index);
      if (min_dist === -1 || min_dist > idx_diff) min_dist = idx_diff;
    } else return;
  });
  return min_dist;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const a = readLine()
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  let result = minimumDistances(a);

  ws.write(result + '\n');

  ws.end();
}
