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

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let num_occur = 0;
  if (s == 'a') return n;
  else {
    s = s.split('');
    s.forEach(l => {
      if (l == 'a') num_occur++;
    });
    num_occur *= Math.floor(n / s.length);
    if (n % s.length == 0) return num_occur;
    else {
      let rem = n % s.length;
      for (let index = 0; index < rem; index++) {
        if (s[index] == 'a') num_occur++;
      }
    }
    return num_occur;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + '\n');

  ws.end();
}
