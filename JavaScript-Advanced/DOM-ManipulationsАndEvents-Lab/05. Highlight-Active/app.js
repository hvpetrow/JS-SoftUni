function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (const field of fields) {
        field.addEventListener('focus',onFocus);
        field.addEventListener('blur' ,onBlur);
    }

    function onFocus(ev){
            ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev){
            ev.target.parentNode.className = '';       
    }
}