'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
  if (n == 1) return 2;
  let share = 5;
  let like = 2;
  let num_likes = 2;
  let index = 1;
  while (index < n) {
    share = like * 3;
    like = Math.floor(share / 2);
    num_likes += like;
    index++;
  }
  return num_likes;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = viralAdvertising(n);

  ws.write(result + '\n');

  ws.end();
}
