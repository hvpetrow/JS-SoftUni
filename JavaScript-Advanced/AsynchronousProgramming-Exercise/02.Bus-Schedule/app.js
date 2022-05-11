function solve() {
    let departButtonElement = document.getElementById('depart');
    let arriveButtonElement = document.getElementById('arrive');
    let infoSpanElement = document.querySelector('#info span');
    let stop = {
        next: 'depot'
    };

    async function depart() {
        try {
            departButtonElement.disabled = true;
            let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
            const res = await fetch(url);
            
            if (res.status != 200) {
                throw new Error('Error');
            }

            stop = await res.json();
            infoSpanElement.textContent = `Next stop ${stop.name}`;
            arriveButtonElement.disabled = false;
        } catch (error) {
            infoSpanElement.textContent = error.message;
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
        }
    }

    async function arrive() {
        arriveButtonElement.disabled = true;
        infoSpanElement.textContent = `Arriving at ${stop.name}`;
        departButtonElement.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();