function editElement(text,stringMatch,replacer) {
    let wholeText = text.textContent;
    const matcher = new RegExp(stringMatch,'g');
   let resultText = wholeText.replace(matcher,replacer);
   text.textContent = resultText;
}