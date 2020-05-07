function isTandemRepeat(inputString) {
    //let split_string = inputString.split('');
    let charMap = new Map();
    let idx = 0;
    let sum = 0;

    while(idx < inputString.length) {
        let char = inputString[idx]; 
        if(!charMap.has(char)) {
            charMap.set(char, [idx,1]);
        } else {
            let temp = charMap.get(char);
            let temp_idx = temp[0] + idx;
            let temp_count = temp[1] + 1;
            charMap.set(char, [temp_idx, temp_count]);
        }
        idx++;
    }

    console.log(charMap);

    for(let val of charMap.values()) {
        if(val[0] % 2 !== 0 || val[1] % 2 !== 0)
            return false;
    }

    return true;
}
