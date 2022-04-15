function solve(matrix) {
    let result = [];
    let indexM = 0;
    let indexL = matrix.length - 1;
    let firstNumber = 0 ;
    let secondNumber = 0 ;

    for (let arr = 0; arr < matrix.length; arr++) {

        firstNumber += (matrix[arr][indexM++]);
        secondNumber += (matrix[arr][indexL--]);
    }

    result.push(firstNumber,secondNumber);
    console.log(result.join(" "));   
}

solve([[20, 40],
[10, 60]])

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])