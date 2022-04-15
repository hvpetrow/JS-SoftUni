function solve(input){
    let oddPositions = [];

    for (let index = 0; index < input.length; index++) {
        if (index%2!=0) {
            oddPositions.push(input[index]);
        }       
    }

    console.log(oddPositions.map(n=>n*2).reverse().join(' ')); 
}

solve([10, 15, 20, 25])