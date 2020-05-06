function isTandemRepeat(inputString) {
    let charMap = new Map();
    let split_string = inputString.split('');

    for(let idx = 0; idx < split_string.length; idx++) {
        let char = split_string[idx];

        if(!charMap.has(char))
            charMap.set(char,1);
        else {
            let count = charMap.get(char);
            if(count+1 > 2)
                return false;
            else
                charMap.set(char,count+1);
        }
    }
    console.log(charMap);
    return true;
}
