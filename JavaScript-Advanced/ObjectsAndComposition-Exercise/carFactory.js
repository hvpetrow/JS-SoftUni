function carFactory(clientRequirement) {
    function getEngine() {
        let power = clientRequirement.power;
        let engines = {
            smallEngine: { power: 90, volume: 1800 },
            normalEngine: { power: 120, volume: 2400 },
            monsterEngine: { power: 200, volume: 3500 }
        };

        if (power <= 90) {
            return engines.smallEngine;
        } else if (power > 90 && power < 200) {
            return engines.normalEngine;
        } else {
            return engines.monsterEngine;
        }
    }

    function getWheels() {
        let wheelSize = clientRequirement.wheelsize;
        if (wheelSize % 2 === 0) {
            wheelSize--;
        }

        let wheelsArray = new Array(4).fill(wheelSize, 0, 4);
        return wheelsArray;
    }
    

    let producedCar = {
        model: clientRequirement.model,
        engine: getEngine(),
        carriage: { type: clientRequirement.carriage,color: clientRequirement.color},
        wheels:getWheels()
    };

    console.log(producedCar);
    return producedCar;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
