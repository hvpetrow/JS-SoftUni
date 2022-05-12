function colorize() {
    let arr = document.querySelectorAll("table tr");

    for (let index = 1; index < arr.length; index+=2) {
        arr[index].style.background = "teal";      
    }
}