function areSimilar(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) return true;
  else if (JSON.stringify(a).length !== JSON.stringify(b).length) return false;
  else {
    let temp_a = [...a];
    let temp_b = [...b];

    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    if (JSON.stringify(a) != JSON.stringify(b)) return false;
    let i = 0;
    let counter = 0;
    while (i < temp_a.length) {
      console.log('outer outer i=', i);
      if (temp_a.length == 0) break;
      if (temp_a[i] == temp_b[i]) {
        temp_a.splice(i, 1);
        temp_b.splice(i, 1);
        i = i > 0 ? i - 1 : 0;
        console.log('removing same elements');
        console.log(
          'temp_a=',
          temp_a,
          ' temp_b=',
          temp_b,
          ' i=',
          i,
          ' counter=',
          counter
        );
      } else {
        if (counter > 1) return false;
        if (temp_a[i + 1] != temp_b[i + 1] && i < temp_a.length) {
          if (temp_a[i] == temp_b[i + 1] && temp_a[i + 1] == temp_b[i]) {
            let temp = temp_a[i];
            temp_a[i] = temp_a[i + 1];
            temp_a[i + 1] = temp;
            counter++;
            if (counter > 1) return false;
            i += 2;
            console.log(counter, i);
          } else if (
            temp_a[i] != temp_b[i] &&
            !(temp_a[i] == temp_b[i + 1] && temp_a[i + 1] == temp_b[i])
          ) {
            counter++;
            if (counter > 1) return false;
            i++;
          }
        } else {
          i++;
        }
        console.log(
          'temp_a=',
          temp_a,
          ' temp_b=',
          temp_b,
          ' i=',
          i,
          ' counter=',
          counter
        );
      }
    }
    return counter <= 1 && true;
  }
}

let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
let b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
console.log(areSimilar(a, b));
