function solve(matrix){
    let isMagic = true;
    let sums = [];
    let rowSum=0;
    let colSum=0;

    for (let row = 0; row < matrix.length; row++) {

        colSum = 0;
        rowSum = 0;       

      
        for (let col = 0; col < matrix[row].length; col++) {
            colSum+= matrix[row][col];
            rowSum+= matrix[col][row];
        }

        if (colSum!==rowSum) {
            isMagic = false ;
        }
    }

    console.log(isMagic);
}

solve([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]])

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

solve([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]])