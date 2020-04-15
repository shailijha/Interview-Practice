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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  let energy = 100;
  let n = c.length;
  let i = 0;
  let idx = (i + k) % n;
  let next = 0;
  while (idx !== 0) {
    next = c[idx];
    if (next === 1) energy -= 2;
    energy -= 1;
    //console.log(idx, next, energy);
    i = idx;
    idx = (i + k) % n;
  }
  //console.log(energy);
  c[0] === 0 ? (energy -= 1) : (energy -= 3);

  return energy;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const c = readLine()
    .split(' ')
    .map((cTemp) => parseInt(cTemp, 10));

  let result = jumpingOnClouds(c, k);

  ws.write(result + '\n');

  ws.end();
}
