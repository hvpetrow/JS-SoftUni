function attachEvents() {
    let inputLocation = document.getElementById('location');
    let forecastDiv = document.getElementById('forecast');
    document.getElementById('submit').addEventListener('click', async function() {
        let data = await getForecast(inputLocation.value);
        forecastDiv.style.display = 'block';
        console.log(data);

        previewWeather(data);
    });
}

attachEvents();

async function previewWeather(data) {
    const currentEl = document.getElementById('current');
    const divForecast = document.createElement('div');
    divForecast.className = "forecasts";
    divForecast.innerHTML = `<span class ="condition symbol">${defineConditionSymbol(data.current.forecast.condition)}</span>
    <span class="condtition">
    <span class="forecast-data">${data.current.name}</span>
    <span class="forecast-data">${data.current.forecast.low}${defineConditionSymbol('Degrees')}/${data.current.forecast.high}${defineConditionSymbol('Degrees')}</span>
    <span class="forecast-data">${data.current.forecast.condition}</span>
    </span>`;
    currentEl.appendChild(divForecast);
    const upcomingEl = document.getElementById('upcoming');
    const divForecastInfo = document.createElement('div');
    divForecastInfo.className = "forecast-info";
    divForecastInfo.innerHTML = `<span class="upcoming"> 
    <span class="symbol">${defineConditionSymbol(data.upcoming.forecast[0].condition)}</span>
    <span class="forecast-data">${data.upcoming.forecast[0].low}${defineConditionSymbol('Degrees')}/${data.upcoming.forecast[0].high}${defineConditionSymbol('Degrees')}</span>
    <span class="forecast-data">${data.upcoming.forecast[0].condition}</span>
    </span>
    <span class="upcoming"> 
    <span class="symbol">${defineConditionSymbol(data.upcoming.forecast[1].condition)}</span>
    <span class="forecast-data">${data.upcoming.forecast[1].low}${defineConditionSymbol('Degrees')}/${data.upcoming.forecast[1].high}${defineConditionSymbol('Degrees')}</span>
    <span class="forecast-data">${data.upcoming.forecast[1].condition}</span>
    </span>
    <span class="upcoming"> 
    <span class="symbol">${defineConditionSymbol(data.upcoming.forecast[2].condition)}</span>
    <span class="forecast-data">${data.upcoming.forecast[2].low}${defineConditionSymbol('Degrees')}/${data.upcoming.forecast[2].high}${defineConditionSymbol('Degrees')}</span>
    <span class="forecast-data">${data.upcoming.forecast[2].condition}</span>
    </span>`;
    upcomingEl.appendChild(divForecastInfo);
}

function defineConditionSymbol(condition) {
    let conditionCode = '';
    if (condition == 'Sunny') {
        conditionCode = '&#x2600;';
    } else if (condition == 'Partly sunny') {
        conditionCode = '&#x26C5;';
    } else if (condition == 'Overcast') {
        conditionCode = '&#x2601;';
    } else if (condition == 'Rain') {
        conditionCode = '&#x2614;';
    } else if (condition == 'Degrees') {
        conditionCode = '&#176;';
    }
    return conditionCode;
}
async function getForecast(name) {
    const code = await getLocationCode(name);

    const [current, upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ]);


    return { current, upcoming };
}

async function getLocationCode(name) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const res = await fetch(url);
    const data = await res.json();

    const location = data.find(l => l.name == name);
    return location.code;

}

async function getCurrent(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function getUpcoming(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}