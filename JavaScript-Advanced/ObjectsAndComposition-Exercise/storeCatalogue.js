function storeCatalogue(input){
    let result = {};

    for (const line of input) {
        let[product,price] = line.split(' : ');
        let firstChar = product[0];
        if (!result.hasOwnProperty(firstChar)) {
            result[firstChar] = {};          
        }

        result[firstChar].push({[product]:price});
    }

   let sortedResult = Object.keys(result).sort((a,b)=>{ return a.localeCompare(b)});
   
    for (const key of sortedResult) {
        console.log(key);

            result[key].sort((a,b)=>{ return a.localeCompare(b)}).forEach((x)=> console.log(`  ${x[0]}:${x[1]}`));
        
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)