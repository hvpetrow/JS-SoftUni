function solve(input) {
    let collection = [];

    const utilityObject = {
        add,
        remove,
        print
    }

    function add(element) {
        collection.push(element);
    }

    function remove(element) {
        collection = collection.filter(e => e !== element);
    }

    function print() {
        console.log(collection.join(','));
    }

    input.forEach(e => {
        let [command, str] = e.split(' ');
        if (command == 'add') {
            utilityObject.add(str);
        } else if (command == 'remove') {
            utilityObject.remove(str);
        } else if (command == 'print') {
            utilityObject.print();
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
