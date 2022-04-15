function solve(input){
    let twoSmallestNumbers = [] ;
    let returnedNumber= 0;

    for (let index = 0; index < 2; index++) {
        let smallestNumber = Math.min(...input);
        twoSmallestNumbers.push(smallestNumber);      
        let smallestNumberIndex= input.indexOf(smallestNumber);
        input.splice(smallestNumberIndex,1); 
    }
    
    console.log(twoSmallestNumbers);
}

solve([30, 15, 50, 5])