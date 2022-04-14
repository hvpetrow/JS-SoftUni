function solve(firstNumber , secondNumber , operator){
    let sum = 0;

    if (operator == '+') {
        sum = firstNumber + secondNumber ;
    }else if(operator=='-'){
        sum = firstNumber - secondNumber;
    }else if(operator=='*'){
        sum = firstNumber * secondNumber;
    }else if (operator == '/') {
        sum = firstNumber / secondNumber;
    }else if (operator== '%') {
        sum = firstNumber % secondNumber;
    }else if (operator == '**') {
        sum = firstNumber ** secondNumber;
    }
    
    console.log(sum);
}

solve(5, 6, '+')
solve(3, 5.5, '*')
