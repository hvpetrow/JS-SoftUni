function solve(arg1,arg2){
    let speed = arg1;
    let area = arg2;
    let speedLimit=0;
    let difference =0;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;       
        default:
            break;
    }

    if (speed>speedLimit) {
        difference = speed - speedLimit ;
        let status = '';
            if(difference<=20) {
                status = 'speeding';
            }else if (difference<=40) {
                status = 'excessive speeding' ;
            } else{
                 status = 'reckless driving' ;
            }
        
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

solve(21, 'residential')
solve(120, 'interstate')
