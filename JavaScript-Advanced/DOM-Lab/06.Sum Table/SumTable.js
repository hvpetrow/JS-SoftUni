function sumTable() {
    let table = document.querySelectorAll('table tr');
    let total = 0;

    for (let index = 1; index < table.length; index++) {
        let cols=table[index].children;
        let cost = cols[cols.length-1].textContent;
        total+=Number(cost);
    }
    
    document.getElementById('sum').textContent=total; 
}