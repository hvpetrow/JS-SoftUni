function solve(n , m){
    let sum = 0;
    let firstNumber = Number(n) ;
    let secondNumber = Number(m);

    for (let num = firstNumber; num <= secondNumber; num++){
        sum+=num;
    }
    
    console.log(sum);
}

solve('1', '5' )
solve('-8', '20')
