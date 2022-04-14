function solve(input){
    let regex = /\w+/g ;
    let inputToUpperCase = input.toUpperCase();
    let result =  inputToUpperCase.match(regex);
    console.log(result.join(', '));
}

solve('Hi, how are you?')