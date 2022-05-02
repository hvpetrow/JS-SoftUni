function calorieObject(input) {
    let caloriesByfood={};

    while (input.length!=0) {
        let food;
        let calories;

        for (let i = 0; i < 2; i++) {
            if (i==0) {
                food =input.shift();              
            }else{
                calories = input.shift();
            }                    
        }

        caloriesByfood[food] = Number(calories);
    }

    console.log(caloriesByfood);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
