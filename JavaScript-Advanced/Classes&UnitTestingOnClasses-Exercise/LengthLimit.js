class Stringer{
    constructor(singleString,strLength){
        this.innerString = singleString;
        this.innerLength = strLength;
    }

    increase(length){
        this.innerLength+=length;
    }

    decrease(length){
        this.innerLength-=length;

        if (this.innerLength<0) {
            this.innerLength=0;
        }
    }

    toString(){
        if (this.innerLength===0) {
            return '...';
        }
        if (this.innerString.length>this.innerLength) {
            
            let differrence =this.innerString.length-this.innerLength
            let changedInnerString =this.innerString.slice(0,-differrence);
           return changedInnerString+ '...';
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
