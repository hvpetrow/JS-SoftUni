function solve(input){
    let sortedInput   = input.sort((a,b) => a.localeCompare(b));
    
    for (let index = 0; index < sortedInput.length; index++) {
        console.log(`${index+1}.${sortedInput[index]}`);        
    }
}

solve(["John", "Bob", "Christina", "Ema"])