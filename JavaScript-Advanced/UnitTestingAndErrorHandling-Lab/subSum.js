function solve(arr,startIndex,endIndex){
    let sum = 0;
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIndex<0) {
        startIndex=0;
    }

    if (endIndex>arr.length-1) {
        endIndex = arr.length-1;
    }

    for (let startIndex = 0; startIndex <= endIndex; startIndex++) {
       sum+=Number(arr[startIndex]);
    }

    console.log(sum);
    return sum;
}


solve([10, 20, 30, 40, 50, 60], 3, 300)
solve([10, 'twenty', 30, 40], 0, 2)
solve('text', 0, 2)

