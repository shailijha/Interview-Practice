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

// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
  let total = 0;
  let num_wrap = Math.floor(n / c);
  total += num_wrap;
  while (num_wrap >= m) {
    let temp = Math.floor(num_wrap / m);
    total += temp;
    let remain = num_wrap - temp * m;
    num_wrap = remain + temp;
  }
  return total;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const ncm = readLine().split(' ');

    const n = parseInt(ncm[0], 10);

    const c = parseInt(ncm[1], 10);

    const m = parseInt(ncm[2], 10);

    let result = chocolateFeast(n, c, m);

    ws.write(result + '\n');
  }

  ws.end();
}
