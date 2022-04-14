function solve(n,op1,op2,op3,op4,op5){
    let number = Number(n);
    let operationArray = [op1,op2,op3,op4,op5];

    for (let index = 0; index < operationArray.length; index++) {
        let currentOperation = operationArray[index];

       if (currentOperation == 'chop') {
           number/=2;
       }else if (currentOperation == 'dice') {
           number = Math.sqrt(number);
       }else if (currentOperation == 'spice') {
           number+=1 ;
       }else if (currentOperation == 'bake') {
        number*=3;           
       }else if (currentOperation == 'fillet') {
        number*=0.8;      
       }

    console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')