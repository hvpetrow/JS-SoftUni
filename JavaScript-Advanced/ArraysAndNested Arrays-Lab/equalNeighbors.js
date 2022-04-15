function solve(matrix){
    let counter = 0 ;

    for (let arr = 0; arr < matrix.length; arr++) {
        for (let index = 0; index < matrix[arr].length; index++) {
            let currentElement = matrix[arr][index];
            if (index==0) {
                if (currentElement=== matrix[arr][index+1] || matrix[arr+1][index] ) {
                    
                }
            }
            if (index === matrix[arr].length) {
                if (currentElement === matrix[arr.length-1][index]) {
                    
                }
            }
            if (currentElement === matrix[arr][index+1] || currentElement === matrix[arr][index-1]
                  || currentElement === matrix[arr+1][index]) {
                    counter++;
            }        
        }      
    }

    console.log(counter);
}

solve([['4', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])