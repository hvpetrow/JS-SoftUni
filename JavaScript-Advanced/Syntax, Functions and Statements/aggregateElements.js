function solve(inputArray){
    let sum = inputArray.reduce((previousValue , currentValue) => previousValue+currentValue);
    let arrayNumbersAsString = '';
    let inverseSum = 0;

    for (let index = 0; index < inputArray.length; index++) {
        inverseSum += 1/inputArray[index];     
        arrayNumbersAsString+=(`${inputArray[index]}`)
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(arrayNumbersAsString);
}

solve([1, 2, 3])
solve([2, 4, 8, 16])
