function calculator() {
        let firstNumberRef;
        let secondNumberRef;
        let resultRef;
    
        function init(selector1, selector2, resultSelector) {
            firstNumberRef = document.querySelector(selector1);
            secondNumberRef = document.querySelector(selector2);
            resultRef = document.querySelector(resultSelector);
        }
    
        function add(){
           resultRef.value = Number(firstNumberRef.value) + Number(secondNumberRef.value);
        }
        
        function subtract() {
           resultRef.value = Number(firstNumberRef.value) - Number(secondNumberRef.value);
        }
    
        return{
            init,
            add,
            subtract
        };
}
    
    const calculate = calculator ();
    calculate.init ('#num1', '#num2', '#result');





