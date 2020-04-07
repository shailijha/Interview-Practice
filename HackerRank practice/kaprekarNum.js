'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
  let result = [];
  let sqr = 0;
  for (let num = p; num <= q; num++) {
    sqr = Math.pow(num, 2);
    // console.log(`num= ${num}, sqr=${sqr}`);
    sqr = sqr.toString().split('');
    // console.log(sqr);
    let split_index = sqr.length - num.toString().length;
    // console.log(split_index);
    let right = sqr.slice(split_index);
    let left = sqr.slice(0, split_index);
    if (left.length == 0) left = ['0'];
    // console.log(right, left);
    let sum = parseInt(right.join('')) + parseInt(left.join(''));
    if (sum == num) result.push(num);
    // console.log(  );
    // console.log('**************');
  }
  result.length > 0 ? console.log(...result) : console.log('INVALID RANGE');
}

function main() {
  const p = parseInt(readLine(), 10);

  const q = parseInt(readLine(), 10);

  kaprekarNumbers(p, q);
}
