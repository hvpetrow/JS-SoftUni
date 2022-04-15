function solve(n , k){
    let lengthOfArr = n;
    let countNumbersToSum = k;
    let sequence = [1];


    for (let index = 1; index < lengthOfArr; index++) {
        let sum = 0;
        for (let count = index - countNumbersToSum; count < index; count++) {
              if (count>=0) {
                  sum+= sequence[count];
              }
        }

        sequence.push(sum);
    }

    return sequence;
}

solve(6, 3)
solve(8, 2)
