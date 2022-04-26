function cityTaxes(city,population, treasury) {
    let town = {
        city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury+=Math.floor(this.population*this.taxRate);
        },
        applyGrowth(percentage){
            this.population+=Math.floor(population*(percentage/100));
        },
        applyRecession(percentage){
            this.treasury-=Math.ceil(treasury*(percentage/100));
        }
    };

    return town;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);