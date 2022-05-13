function addItem() {
        let liElement = document.createElement('li');
        let newItemElement = document.getElementById('newItemText');
        let itemsList = document.getElementById('items');
        liElement.textContent = newItemElement.value;
        itemsList.appendChild(liElement);
}