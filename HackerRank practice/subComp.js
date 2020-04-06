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

// Complete the acmTeam function below.
function acmTeam(topic) {
  let max_sub_count = 0;
  let num_teams = 0;
  let len = topic[0].length;
  for (let i = 0; i < topic.length; i++) {
    let cndt1 = topic[i].split('');
    for (let j = i + 1; j < topic.length; j++) {
      let cndt2 = topic[j].split('');
      let temp_sub_count = 0;
      for (let counter = 0; counter < len; counter++) {
        temp_sub_count += parseInt(cndt1[counter]) || parseInt(cndt2[counter]);
      }
      if (max_sub_count < temp_sub_count) {
        max_sub_count = temp_sub_count;
        num_teams = 1;
      } else if (max_sub_count === temp_sub_count) num_teams += 1;
    }
  }
  return Array.of(max_sub_count, num_teams);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nm = readLine().split(' ');

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  let topic = [];

  for (let i = 0; i < n; i++) {
    const topicItem = readLine();
    topic.push(topicItem);
  }

  let result = acmTeam(topic);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
