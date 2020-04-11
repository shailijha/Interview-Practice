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

// Complete the encryption function below.
function encryption(s) {
  let len = Math.sqrt(s.length);
  let rows = Math.floor(len);
  let cols = Math.ceil(len);
  console.log(rows * cols < Math.pow(len, 2));
  if (rows * cols < Math.pow(len, 2)) {
    rows += 1;
  }
  console.log(rows, cols);
  let idx = 0;
  let result = [];
  for (let i = 0; i < rows; i++) {
    let temp = '';
    for (let j = 0; j < cols; j++) {
      let char = s[idx];
      if (char !== undefined) temp += char;
      idx++;
    }
    result.push(temp);
  }
  console.log(result);
  let enc_msg = '';
  for (let i = 0; i < result[0].length; i++) {
    let temp = '';
    for (let j = 0; j < result.length; j++) {
      let char = result[j][i];
      if (char !== undefined) temp += char;
    }
    enc_msg += temp + ' ';
  }
  return enc_msg.trim();
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = encryption(s);

  ws.write(result + '\n');

  ws.end();
}
