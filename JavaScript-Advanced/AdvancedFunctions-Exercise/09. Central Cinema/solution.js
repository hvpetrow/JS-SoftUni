function solve() {
    let divContainer = document.getElementById('container');
    let nameInput = divContainer.querySelector('input[placeholder="Name"]');
    let hallInput = divContainer.querySelector('input[placeholder="Hall"]');
    let ticketPriceInput = divContainer.querySelector('input[placeholder="Ticket Price"]');
    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreen);




    function onScreen(ev) {
        ev.preventDefault;

        if (nameInput.value && hallInput.value && Number(ticketPriceInput.value)) {

            let moviesOnScreenList = document.querySelector('#movies ul');

            let movie = document.createElement('li');
            let movieSpan = document.createElement('span');
            movieSpan.innerText = nameInput.value;
            let movieStrongElement = document.createElement('strong');
            movieStrongElement.innerText = `Hall: ${hallInput.value}`
            movie.appendChild(movieSpan);
            movie.appendChild(movieStrongElement);

            let movieDivElement = document.createElement('div');
            let movieDivStrongElement = document.createElement('strong');
            movieDivStrongElement.textContent = Number(ticketPriceInput.value).toFixed(2);
            let movieDivInputElement = document.createElement('input');
            movieDivInputElement.placeholder = 'Tickets Sold';
            let movieDivArchiveButton = document.createElement('button');
            movieDivArchiveButton.innerText = 'Archive';
            movieDivArchiveButton.addEventListener('click', archive);
            movieDivElement.appendChild(movieDivStrongElement);
            movieDivElement.appendChild(movieDivInputElement);
            movieDivElement.appendChild(movieDivArchiveButton);

            movie.appendChild(movieDivElement);
            moviesOnScreenList.appendChild(movie);
        }


        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';


        function archive(ev) {
            if (movieDivInputElement.value != 0 && typeof movieDivInputElement.value == 'number') {
                let archiveUl = document.querySelector('#archive ul');
                let archiveLi = document.createElement('li');
                let archiveLiSpanElement = document.createElement('span');
                let archiveLiStrongElement = document.createElement('strong');
                let archiveLiButtonElement = document.createElement('button');

                archiveLiSpanElement.textContent = nameInput.value;
                archiveLiStrongElement.textContent = `Total amount: ${(ticketPriceInput.value * movieDivInputElement.value).toFixed(2)}`;
                archiveLiButtonElement.textContent = 'Delete';

                archiveLi.appendChild(archiveLiSpanElement);
                archiveLi.appendChild(archiveLiStrongElement);
                archiveLi.appendChild(archiveLiButtonElement);

                archiveUl.appendChild(archiveLi);

                let clearButtonElement = document.querySelector('#archive button');
                clearButtonElement.addEventListener('click', clear);


            }
        }
        
            function clear(ev) {
                while (archiveUl.lastElementChild) {
                    archiveUl.removeChild(lastElementChild);
                }
            }
        
    }
}
