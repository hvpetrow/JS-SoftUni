function extractText() {
    let itemNodes = 
        document.querySelectorAll('ul#items li');
    let textAreaRef = 
        document.querySelector('#result');

     for (const node of itemNodes) {
        textAreaRef.textContent += node.textContent + "\n";
     }        
}