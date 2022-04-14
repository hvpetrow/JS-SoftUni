function solve(a,b){
    while (b!=0) {
        const temp = b;
        b = a%b;
        a=temp;
    }

    console.log(a);
}

solve(15, 5)
solve(2154, 458)
