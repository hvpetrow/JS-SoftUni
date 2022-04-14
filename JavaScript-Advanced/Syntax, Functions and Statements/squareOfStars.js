function solve(number){
    let matrix = [];
    let arrString=''; 
    function drawRectangle (n = 5){
        for (let row = 0; row < n; row++) {
           matrix[row] = new Array(n);
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] = '*';         
                arrString+=matrix[row][col] + ' ';                  
            }
            console.log(arrString);
            arrString='';
        }      
    }

    drawRectangle(number); 
}

solve(1)
solve(2)
solve(5)
