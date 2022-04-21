function solve(arr,number){
    let rotations = Number(number);
    for (let index = 0; index < rotations; index++) {
        let rotatedNumber = arr.pop();
        arr.unshift(rotatedNumber);        
    }

    console.log(arr.join(" "));
}

solve(['1', 
'2', 
'3', 
'4'], 
2)

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)