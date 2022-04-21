function solve(array){
    // let biggestNumber = numbers.shift();
    // let increasingNumbers=[];
    // increasingNumbers.push(biggestNumber);

    // for (const number of numbers) {
        
    //     if (biggestNumber<=number) {
    //         biggestNumber = number;
    //         increasingNumbers.push(biggestNumber);
    //     } 
    // }

    // return increasingNumbers;
   
        let max = Number.MIN_SAFE_INTEGER;
        let arr = array.filter(num => {
            if (num > max) {
                max = num;
                return true;
            } else {
                return false;
            }
        });
    
        return arr;  
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])

    solve([20, 
        3, 
        2, 
        15,
        6, 
        1])