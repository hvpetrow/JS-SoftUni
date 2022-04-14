function solve(input){
    let inputType =  typeof input;

    if (inputType === 'number') {
        let circleArea = Math.PI * input**2;
        console.log(circleArea.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

solve(5)
solve('name')
