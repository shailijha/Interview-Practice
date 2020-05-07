function isTandemRepeat(inputString) {
    let char = inputString[0];
    let dup_char_idx = inputString.indexOf(char, 1)
    let str1 = inputString.slice(0,dup_char_idx);
    let str2 = inputString.slice(dup_char_idx);

    if(str1.length !== str2.length)
        return false;
    return true;
}
