function cars(input){
    let brands = {};

    for (const line of input) {
        let[carBrand,carModel,producedCars] = line.split(' | ');
        if (!brands.hasOwnProperty(carBrand)) {
            brands[carBrand] = {};                
        }

        if (!brands[carBrand].hasOwnProperty(carModel)) {
            brands[carBrand][carModel] = 0;
        }

        brands[carBrand][carModel] += Number(producedCars);       
    }

    for (const [brand,models] of Object.entries(brands)) {
        console.log(brand);
        for (const [model,quantity] of Object.entries(models)) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

cars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])