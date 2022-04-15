function solve(input ,startingTarget,endingTarget){
    let startIndex = input.indexOf(startingTarget);
    let endIndex = input.indexOf(endingTarget);
    let targets = input.slice(startIndex,endIndex+1);

    return targets;
}

solve(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')

