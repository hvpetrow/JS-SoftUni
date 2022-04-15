function solve(input){
    let evenPositions = [];

    for (let index = 0; index < input.length; index++) {
        if (index % 2 ==0) {
            let currentElement = input[index];
            evenPositions.push(currentElement);
        }       
    }

    console.log(evenPositions.join(" "));
}

solve([2, 3, 5])
solve(['20', '30', '40', '50', '60'])