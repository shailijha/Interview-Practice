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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  let min = Math.min(...scores);
  let max = Math.max(...scores);
  let result = [];
  let last_index = scores.length - 1;

  let score_map = new Map();
  let rank = 0;
  scores.forEach((score) => {
    if (!score_map.has(score)) {
      score_map.set(score, rank + 1);
      rank++;
    }
  });
  console.log(score_map);

  for (let index = 0; index < alice.length; index++) {
    let score = alice[index];
    if (score < min) result.push(score_map.get(min) + 1);
    else if (score > max) result.push(1);
    else {
      for (let idx = last_index; idx >= 0; idx--) {
        if (scores[idx] === score) {
          result.push(score_map.get(score));
          last_index = idx;
          //console.log(score, scores[idx], score_map.get(score), last_index);
          break;
        } else if (scores[idx] > score) {
          result.push(score_map.get(scores[idx]) + 1);
          last_index = idx + 1;
          //console.log(score, scores[idx], score_map.get(scores[idx]), last_index);
          break;
        }
      }
    }
  }
  //console.log()
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine()
    .split(' ')
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine()
    .split(' ')
    .map((aliceTemp) => parseInt(aliceTemp, 10));

  let result = climbingLeaderboard(scores, alice);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
