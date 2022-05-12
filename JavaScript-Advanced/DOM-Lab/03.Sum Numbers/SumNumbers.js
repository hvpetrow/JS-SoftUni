function calc() {
    let firstNumber = document.getElementById('num1');
    let secondNumber = document.getElementById('num2');
    let result = document.getElementById('sum');
    result.value = Number(firstNumber.value) + Number(secondNumber.value);   
}
