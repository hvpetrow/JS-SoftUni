function solve(input){
    let bigNumbers = [];  

     for (const array of input) {
       bigNumbers.push(Math.max(...array));        
     }

    console.log(Math.max(...bigNumbers));
}

solve([[20, 50, 10],
    [8, 33, 145]])

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])