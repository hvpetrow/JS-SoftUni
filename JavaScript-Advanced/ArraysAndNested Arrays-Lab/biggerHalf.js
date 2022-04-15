function solve(numbers){
    let biggerHalf = [];
    let sortedNumbers = numbers.sort((a,b) => a-b);

    for (let index = parseInt(sortedNumbers.length/2); index < sortedNumbers.length; index++) {
        biggerHalf.push(sortedNumbers[index]);     
    }

    return biggerHalf;
}

solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])
