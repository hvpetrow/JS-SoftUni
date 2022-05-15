function encodeAndDecodeMessages() {
    let divCollection = document.querySelectorAll('#main div');
    let sentMessageRef = divCollection[0].querySelector('textarea');
    let recievedMessageRef = divCollection[1].querySelector('textarea');
    let sendButton = divCollection[0].querySelector('button');
    let readButton = divCollection[1].querySelector('button');

    sendButton.addEventListener('click', encodeText);
    readButton.addEventListener('click', readText);

    function encodeText(){
            let text = sentMessageRef.value;
            let encodedText = '';

            for (let i = 0; i < text.length; i++) {
                let charAsciiNumber = text.charCodeAt(i);
                let encodedChar = String.fromCharCode(charAsciiNumber+1);
                encodedText+=encodedChar;                       
            }

            sentMessageRef.value = '';
            recievedMessageRef.value = encodedText;
    }

    function readText(){
            let recievedEncodedText = recievedMessageRef.value;
            let decodedText = '';

            for (let i = 0; i < recievedEncodedText.length; i++) {
                let charAsciiNumber = recievedEncodedText.charCodeAt(i);
                let decodedChar = String.fromCharCode(charAsciiNumber-1);
                decodedText+=decodedChar;                       
            }

            recievedMessageRef.value = decodedText;
    }
}