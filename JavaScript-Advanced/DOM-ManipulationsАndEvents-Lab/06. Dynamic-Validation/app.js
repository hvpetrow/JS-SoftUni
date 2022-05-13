function validate() {
    let inputElement = document.getElementById('email');
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event){
        if(regex.test(event.target.value)){
            event.currentTarget.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
}