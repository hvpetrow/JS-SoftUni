function solve(number){
    let numberAsString = number.toString();
    let isSame= true;
    let firstDigit = numberAsString[0];
    let sum = 0;

    for (const digit of numberAsString) {       
        if (digit!==firstDigit) {
            isSame = false;
        }
        
        sum+=Number(digit);
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222)
solve(1234)
