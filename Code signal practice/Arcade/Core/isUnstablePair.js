let result = [];

function uneqCharIdx(filename1, filename2) {
    for(let i = 0; i < filename1.length; i++) {
        if(filename1[i] !== filename2[i])
            return i;
    }
    return -1;
}

function checkIdx(idx, filename1, filename2) {
    if(idx !== -1) {
        if(filename1.charCodeAt(idx) < filename2.charCodeAt(idx))
            result.push(filename1);
        else
            result.push(filename2);
    } else {
        filename1.length < filename2.length ? result.push(filename1) : result.push(filename2);
    }
}

function isUnstablePair(filename1, filename2) {
    let idx = -1;

    idx = uneqCharIdx(filename1, filename2);

    checkIdx(idx, filename1, filename2);

    filename1 = filename1.toUpperCase();
    filename2 = filename2.toUpperCase();

    idx = -1;

    idx = uneqCharIdx(filename1, filename2);

    checkIdx(idx, filename1, filename2);
    
    //console.log(result);
    return (result[0].toUpperCase() === result[1].toUpperCase()) ? false : true;
}
