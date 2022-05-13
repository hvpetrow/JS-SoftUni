function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[name="email"]');
    let cellsElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let arrCellsElements = Array.from(cellsElements);
    let targetElement = arrCellsElements.find(x=>x.textContent===inputEmailElement.value);

    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent="Deleted.";       
    }else{
        resultElement.textContent = "Not found.";
    }
}