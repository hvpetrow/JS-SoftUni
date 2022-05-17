function solve(...input){  
let counterObj = {};

    input.forEach(e=>{
        let type = typeof e;
        console.log(`${type}: ${e}`);
        if (!counterObj.hasOwnProperty(type)) {
            counterObj[type] = 0;
        }

        counterObj[type]++;
    });
    
    Object.keys(counterObj).sort((a,b)=>counterObj[b]-counterObj[a]).forEach(key => console.log(`${key} = ${counterObj[key]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); })