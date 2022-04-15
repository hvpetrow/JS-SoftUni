function solve(input){
    let resultArray = [];
    for (const number of input) {
        if (number>=0) {
            resultArray.push(number);
        }else{
            resultArray.unshift(number);
        }      
    }

    console.log(resultArray);
}

solve([7, -2, 8, 9])