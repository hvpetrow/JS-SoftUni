function solve(a,b,c){
let lengthSum = a.length + b.length + c.length;
let averageLength = Math.round(lengthSum / 3);
console.log(lengthSum);
console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
