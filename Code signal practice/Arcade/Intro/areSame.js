// function areSimilar(a, b) {
//   if (JSON.stringify(a) === JSON.stringify(b)) return true;
//   else if (JSON.stringify(a).length !== JSON.stringify(b).length) return false;
//   else {
//     let temp_a = [...a];
//     let temp_b = [...b];
//     let result = true;
//     let counter = 0;
//     if (
//       JSON.stringify(a.sort((a, b) => a - b)) !==
//       JSON.stringify(b.sort((a, b) => a - b))
//     )
//       return false;
//     else {
//       let temp_index1 = -1;
//       let temp_index2 = -1;
//       let i = 0;
//       let num_rounds = 0;
//       while (i < a.length) {
//         console.log('counter ', counter, ' i ', i, ' num_rounds=', num_rounds);
//         if (temp_a.length == 0) {
//           break;
//         } else if (counter > 1 || num_rounds > 2 * a.length) {
//           result = false;
//           break;
//         } else if (temp_a[i] == temp_b[i]) {
//           temp_a.splice(i, 1);
//           temp_b.splice(i, 1);
//           console.log('splicing out same elements ', temp_a, temp_b);
//           i = 0;
//           num_rounds++;
//           continue;
//         } else {
//           if (
//             temp_a[i] == temp_b[i + 1] &&
//             temp_a[i + 1] == temp_b[i] &&
//             temp_a[i + 1] != temp_b[i + 1]
//           ) {
//             let temp = temp_a[i + 1];
//             temp_a[i + 1] = temp_a[i];
//             temp_a[i] = temp;
//             num_rounds;
//             counter++;
//           } else if (
//             temp_index1 != -1 &&
//             temp_index2 != -1 &&
//             temp_a[temp_index1] == temp_b[temp_index2] &&
//             temp_a[temp_index2] == temp_b[temp_index1]
//           ) {
//             let temp = temp_a[temp_index1];
//             temp_a[temp_index1] = temp_a[temp_index2];
//             temp_a[temp_index2] = temp;
//             num_rounds++;
//             counter++;
//           } else if (temp_index1 == -1 || temp_index2 == -1) {
//             if (temp_index1 == -1) temp_index1 = i;
//             else if (temp_index2 == -1) temp_index2 = i;
//             console.log('temp indexes ', temp_index1, temp_index2);
//             num_rounds++;
//             i++;
//           }
//           console.log(temp_a, temp_b);
//           num_rounds++;
//         }
//       }
//       return result;
//     }
//   }
// }

// let a1 = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
// let a = [4, 6, 3];
// let a2 = [1, 2, 3];

// let b1 = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
// let b = [3, 4, 6];
// let b2 = [2, 1, 3];

// console.log(areSimilar(a, b));
// console.log(areSimilar(a1, b1));
//console.log(areSimilar(a2, b2));

/* 
let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];

let b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];

step1: [998, 148, 570, 533, 561, 894, 147, 455, 279] [570, 148, 998, 533, 561, 455, 147, 894, 279]
step 
*/

// function areSimilar(a, b) {
//   if(JSON.stringify(a) === JSON.stringify(b))
//       return true;
//   else if(JSON.stringify(a).length !== JSON.stringify(b).length)
//       return false;
//   else {
//       let temp_a = [...a];
//       let temp_b = [...b];
//       let result = true;
//       let counter = 0;
//       if(JSON.stringify(a.sort((a,b) => a-b)) !== JSON.stringify(b.sort((a,b) => a-b)))
//           return false;
//       else {
//           let temp_index1 = -1;
//           let temp_index2 = -1;
//           let i = 0;
//           while(i < a.length) {
//               console.log('counter ',counter);
//               if(counter > 1)
//               {
//                   result = false;
//                   break;
//               }
//               if(temp_a[i] == temp_b[i])
//               {
//                   temp_a.splice(i,1);
//                   temp_b.splice(i,1);
//                   console.log(temp_a,temp_b);
//                   i++;
//                   continue;
//               }
//               else {

//                   if(temp_a[i] == temp_b[i+1] && temp_a[i+1] == temp_b[i] && temp_a[i+1] != temp_b[i+1])
//                   {
//                       let temp = temp_a[i+1];
//                       temp_a[i+1] = temp_a[i];
//                       temp_a[i] = temp;
//                       counter++;
//                   }
//                   else if(temp_index1 != -1 && temp_index2 != -1) {
//                       let temp = temp_a[temp_index1];
//                       temp_a[temp_index1] = temp_a[temp_index2];
//                       temp_a[temp_index2] = temp;
//                       counter++;
//                   }
//                   else {
//                       if(temp_index1 == -1)
//                           temp_index1 = i;
//                       else if(temp_index2 == -1)
//                           temp_index2 = i;
//                       i++;
//                   }
//                   console.log(temp_a,temp_b);
//               }
//           }
//           return result;
//       }
//   }
// }
let sc1 = 0;
let sc2 = 0;

let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
let b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
// let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
// let b = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279];

let i = 0;

while (i < a.length) {
  if (a[i] == b[i]) {
    a.splice(i, 1);
    b.splice(i, 1);
    i = 0;
  } else {
    i++;
    continue;
  }
}
console.log(a, b);
a.sort((a, b) => {
  sc1++;
  return a - b;
});

b.sort((a, b) => {
  sc2++;
  return a - b;
});

console.log(a, b);
console.log(sc1, sc2);
