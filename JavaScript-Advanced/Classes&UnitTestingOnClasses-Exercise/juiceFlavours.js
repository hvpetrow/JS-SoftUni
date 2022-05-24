function juiceFlavours(input){
    let juices = new Map;
    let bottlesJuices = new Map;

    for (const line of input) {
        const [juice,quantity] = line.split(' => ');

        if (!juices.has(juice)) {
            juices.set(juice,Number(quantity));  
            bottlesJuices.set(juice,0);         
        }else{          
            juices.set(juice,juices.get(juice)+Number(quantity));
        }

        if (juices.get(juice)>1000) {
            let bottleQuantity = parseInt(juices.get(juice)/1000);
            juices.set(juice,juices.get(juice)%(1000*bottleQuantity));
            bottlesJuices.set(juice,bottlesJuices.get(juice) + bottleQuantity);
        }
    }

    let bottlesJuicesEntries = Array.from(bottlesJuices.keys());
    let filtered = bottlesJuicesEntries.filter(key=> bottlesJuices.get(key)>0);
    
            for (const key of filtered) {
                console.log(`${key} => ${bottlesJuices.get(key)}`);
            }
}

// function juiceFlavours(input){
//     let juices = {};
//     let bottlesJuices = {};

//     for (const line of input) {
//         let[juice,quantity] = line.split(' => ');

//         if (!juices.hasOwnProperty(juice)) {
//             juices[juice] = Number(quantity);  
//             bottlesJuices[juice]=0;         
//         }else{
//             juices[juice]+=Number(quantity);
//         }

//         if (juices[juice]>1000) {
//             let bottleQuantity = parseInt(juices[juice]/1000);
//             juices[juice] = juices[juice]%(1000*bottleQuantity);
//             bottlesJuices[juice] += bottleQuantity;
//         }
//     }



//     let bottlesJuicesKeys = Object.keys(bottlesJuices);
//     bottlesJuicesKeys.filter(key=>bottlesJuices[key]>0).forEach(key=>console.log(`${key} => ${bottlesJuices[key]}`));
// }

juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])

juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])