function addItem() {
        let textInput = document.getElementById('newItemText');
        let valueInput = document.getElementById('newItemValue');          
        
        let option = document.createElement('option');
        option.text = textInput.value;
        option.value = valueInput.value;

        let menu = document.getElementById('menu');

        let addButton = document.getElementById('')
        
        if (textInput!=='' && valueInput!=='') {
                menu.appendChild(option);  
                textInput.value = '';
                valueInput.value= '';          
        }           
}