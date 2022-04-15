function solve(input){
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());
    let sum = firstElement +lastElement ;

    console.log(sum);
}

solve(['5', '10'])