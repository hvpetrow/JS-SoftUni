async function getInfo() {
    const stopNameEl = document.getElementById('stopName');
    const timeTableEl = document.getElementById('buses');
    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    try {
        stopNameEl.textContent = 'Loading...'
        timeTableEl.replaceChildren();
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('Stop ID not found.')
        }
        const data = await res.json();
        stopNameEl.textContent = data.name;
        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `${b[0]} arrives in ${b[1]} minutes`;
            timeTableEl.appendChild(liElement);
            console.log(data);
        });
    } catch (error) {
        stopNameEl.textContent = 'Error';
    }

}