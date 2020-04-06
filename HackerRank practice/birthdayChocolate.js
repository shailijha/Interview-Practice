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

// Complete the birthday function below.
function birthday(s, d, m) {
  //console.log(s, d, m);
  let num_ways = 0;
  let index = 0;
  while (index < s.length) {
    let temp_sum = s[index];
    for (let i = 1; i < m; i++) {
      temp_sum += s[index + i];
    }
    if (temp_sum == d) num_ways++;
    index++;
  }
  return num_ways;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(sTemp => parseInt(sTemp, 10));

  const dm = readLine()
    .replace(/\s+$/g, '')
    .split(' ');

  const d = parseInt(dm[0], 10);

  const m = parseInt(dm[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + '\n');

  ws.end();
}
