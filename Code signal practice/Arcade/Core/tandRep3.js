function isTandemRepeat(inputString) {
    let split_string = inputString.split('');
    console.log(split_string);
    let count = 0;

    for(let idx = 0;idx < split_string.length; idx++) {
        let char = split_string[idx];
        let dup_idx = split_string.indexOf(char,idx+1);
        if(dup_idx > -1 && ((dup_idx + idx) % 2 === 0)) 
            count++;
        console.log(count, char);
    }
    console.log(count, split_string.length);
    return count === (split_string.length/2) ? true : false;
}
