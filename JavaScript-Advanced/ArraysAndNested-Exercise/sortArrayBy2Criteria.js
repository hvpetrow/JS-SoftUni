function solve(arr) {
    // let sortedArr = arr.sort((a,b) => a.length-b.length||a.localeCompare(b));
    let sortedArr = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }

    })
    console.log(sortedArr.join('\n'));
}

solve(['alpha',
    'beta',
    'gamma'])