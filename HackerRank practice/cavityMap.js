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

// Complete the cavityMap function below.
function cavityMap(grid) {
  // console.log(grid);
  grid.forEach((str, idx) => {
    grid[idx] = str.split('');
  });
  // console.log(grid);
  // console.log(grid[0][0]);

  for (let i = 1; i < grid[0].length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      let elt = parseInt(grid[i][j]);
      let adj = [
        parseInt(grid[i - 1][j]),
        parseInt(grid[i + 1][j]),
        parseInt(grid[i][j - 1]),
        parseInt(grid[i][j + 1]),
      ];
      // if(i==1)
      //     console.log(elt,adj);
      if (adj.indexOf(elt) === -1) {
        if (Math.max(...adj, elt) === elt) grid[i][j] = 'X';
      }
    }
  }
  grid.forEach((str, idx) => {
    grid[idx] = str.join('');
  });
  //console.log(grid);
  return grid;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let grid = [];

  for (let i = 0; i < n; i++) {
    const gridItem = readLine();
    grid.push(gridItem);
  }

  let result = cavityMap(grid);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
