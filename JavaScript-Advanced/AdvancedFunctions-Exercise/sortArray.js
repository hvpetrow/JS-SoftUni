function sortArray(numbers,typeOfSort){
    if (typeOfSort=='asc') {
        numbers.sort((a,b)=>a-b);
    }else{
        numbers.sort((a,b)=>b-a);
    }

    return numbers;
}

sortArray([14, 7, 17, 6, 8], 'asc')