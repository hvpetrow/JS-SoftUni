function townsToJSON(input){
    let towns =[];

    for (const line of input.slice(1)) {
        let slicedLine = line.slice(2,-2);
        let [town,latitude,longtitude] = slicedLine.split(' | ');
        let townObj = { Town: town, Latitude:
            JSON.parse(Number(latitude).toFixed(2)), Longitude: JSON.parse(Number(longtitude).toFixed(2)) };
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])