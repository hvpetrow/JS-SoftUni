function solve(input){
    let result = [];

    while (input.length!==0) {
        let smallestOne = Math.min(...input);
        result.push(smallestOne);
        let indexOfSmallestOne = input.indexOf(smallestOne);
        input.splice(indexOfSmallestOne,1);
        if (input.length===0) {
            break;
        }

        let biggestOne = Math.max(...input);
        result.push(biggestOne);
        let indexOfBiggestOne = input.indexOf(biggestOne);
        input.splice(indexOfBiggestOne,1);
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18])