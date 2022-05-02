function solve() {
    let hero ={
        mage(mageName){
            let mageState={
                name:mageName,
                health:100,
                mana:100,
                cast(magic){
                    this.mana--;
                    console.log(`${mageName} cast ${magic}`);
                }
            };

            return mageState;
        },
        fighter(fighterName){
            let fighterState={
                name:fighterName,
                health:100,
                stamina:100,
                fight(){
                    this.stamina--;
                    console.log(`${fighterName} slashes at the foe!`);
                }
            };

            return fighterState;
        }
    };

    return hero;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
