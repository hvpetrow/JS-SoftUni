function addItem() {
    let itemsListRef = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    inputElement.value = "";

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click',()=>{
    deleteElement.parentElement.remove();
    });

    liElement.appendChild(deleteElement);
    itemsListRef.appendChild(liElement);
}