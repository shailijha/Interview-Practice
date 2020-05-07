function isTandemRepeat(inputString) {
    let split_string = inputString.split('');
    let charMap = new Map();

    while(idx < split_string.length) {
        if(split_string[idx] === char) {
            // console.log(idx);
            split_string.splice(0,idx);
            //console.log(split_string);
            split_string.splice(0,idx);
        }
        idx++;
    }
    console.log(split_string);
    return split_string.length === 0 ? true : false;
    //return true;
}
