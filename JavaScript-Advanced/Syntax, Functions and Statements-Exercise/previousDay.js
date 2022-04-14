function solve(year,month,day){
    let dateString = year + '-' + month + '-' + day ;
    let event = new Date(dateString);
    event.setDate(day-1);
    console.log(event.getFullYear()+ '-' + (Number(event.getMonth()) + 1 )+ '-' + event.getDate());
}

solve(2016, 9, 30)
solve(2016, 10, 1)
