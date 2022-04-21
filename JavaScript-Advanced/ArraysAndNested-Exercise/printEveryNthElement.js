function solve(arr , step){
    let steppedArr = [];

    for (let index = 0; index < arr.length; index+=step){
        steppedArr.push(arr[index]);
    }

    return steppedArr;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2)

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
)

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6)