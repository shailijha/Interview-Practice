function isTandemRepeat(inputString) {
    let split_string = inputString.split('');
    let idx = 0;

    while(idx < split_string.length) {
        let char = split_string[idx];
        if(char === '')
            break;
        let dup_idx = split_string.indexOf(char,idx+1);
        console.log(char, idx, dup_idx);
        console.log(dup_idx + idx);
        if(dup_idx > -1 && ((dup_idx + idx) % 2 === 0)) {
            split_string[dup_idx] = '';
            split_string[idx] = '';
        }
        else
            return false;
        idx++;
        console.log(split_string);
    }
    // console.log(charMap);
    //console.log(split_string.length);
    //return split_string.length === 0 ? true : false;
    return true;
}
