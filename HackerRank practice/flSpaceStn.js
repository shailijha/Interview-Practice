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

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
  let dist = [];
  for (let num = 0; num < n; num++) {
    if (c.indexOf(num) > -1) dist.push(0);
    else {
      let dist_diff = [];
      c.forEach((stn) => dist_diff.push(Math.abs(stn - num)));
      console.log('num=', num, dist_diff);
      dist.push(Math.min(...dist_diff));
    }
  }
  return Math.max(...dist);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nm = readLine().split(' ');

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  const c = readLine()
    .split(' ')
    .map((cTemp) => parseInt(cTemp, 10));

  let result = flatlandSpaceStations(n, c);

  ws.write(result + '\n');

  ws.end();
}
