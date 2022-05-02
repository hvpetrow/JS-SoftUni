function createSortedList() {
    let storeArray = [];

    let sortedList = {
        add(element) {
            storeArray.push(element);
            this.size++;
            storeArray.sort((a, b) => a - b);

        },
        remove(index) {
            if (index >= 0 && index < storeArray.length) {
                storeArray.splice(index, 1);
                this.size--;
                storeArray.sort((a, b) => a - b);
            }
        },
        get(index) {
            return storeArray[index];
        },
        size: 0
    };

    return sortedList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));