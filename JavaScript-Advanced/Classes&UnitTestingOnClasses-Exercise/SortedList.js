class List{
    constructor(){
        this.elements = [];
        this.size = this.elements.length;
    }

    add(element){
        this.elements.push(Number(element));
        this.elements.sort((a,b)=>a-b);
        this.size++;
    }

    remove(index){
        if (index>=0 && index<this.elements.length) {
            this.elements.splice(index,1);    
            this.elements.sort((a, b) => a - b); 
            this.size--;      
        }else{
             throw new Error('Index out of range');
        }
    }

    get(index){
        if (index>=0 && index<this.size) {
            return this.elements[index];           
        }else{

            throw new Error('Index out of range');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));