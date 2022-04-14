function solve(day){
    let daysOfWeek={
        'Monday' : 1,
        'Tuesday' : 2,
        'Wednesday' : 3,
        'Thursday' : 4,
        'Friday' : 5,
        'Saturday' : 6,
        'Sunday' : 7
    };

    if (daysOfWeek.hasOwnProperty(day)) {
        console.log(daysOfWeek[day]);
    }else{
        console.log('error');
    }
}

solve('Monday')
solve('Friday')
solve('Invalid')
