async function getInfo() {
    let stopIdElement = document.getElementById('stopId');
    let stopId = stopIdElement.value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    stopIdElement.value='';

    let stopNameDiv = document.getElementById('stopName');

    let buses = document.getElementById('buses');

    try {
        buses.replaceChildren();
        stopNameDiv.value = 'Loading...';

        const res = await fetch(url);
        if (res.status!=200) {
            throw new Error('Stop Id not found');
        }

        const data = await res.json();
        console.log(data);
        stopNameDiv.textContent = data.name;
        Object.entries(data.buses).forEach(bus=>{
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            buses.appendChild(liElement);
        });

    } catch (error) {
        stopNameDiv.textContent = 'Error';
    }
}