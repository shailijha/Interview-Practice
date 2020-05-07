function isTandemRepeat(inputString) {
    let char = inputString[0];
    let dup_char_idx = inputString.indexOf(char, 1)
    let rep_str = inputString.slice(0,dup_char_idx);

    let rep_str_dup_idx = inputString.indexOf(rep_str, dup_char_idx);

    let rep_str_dup = inputString.slice(rep_str_dup_idx, rep_str_dup_idx + rep_str.length);

    console.log(rep_str, rep_str_dup);

    console.log(inputString.slice(rep_str_dup_idx + rep_str.length));

    let rem_str_len = inputString.slice(rep_str_dup_idx + rep_str.length).length;

    return (rep_str === rep_str_dup && rem_str_len === 0) ? true : false;

    // if(str1.length !== str2.length)
    //     return false;
    // return true;
}
