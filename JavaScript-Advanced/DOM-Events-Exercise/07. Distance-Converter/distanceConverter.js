function attachEventsListeners() {
    let inputDistanceRef = document.getElementById('inputDistance');
    let outputDistanaceRef = document.getElementById("outputDistance");
    let converButton = document.getElementById('convert');


    const convert = function () {
        let distance = Number(inputDistanceRef.value);
        let fromOption = document.getElementById('inputUnits');
        let toOption = document.getElementById('outputUnits');
        let distanceInMeters = 0;

        if (fromOption.value === 'km') {
            distanceInMeters = distance * 1000;
        } else if (fromOption.value === 'm') {
            distanceInMeters = distance;
        } else if (fromOption.value === 'cm') {
            distanceInMeters = distance * 0.01;
        } else if (fromOption.value === 'mm') {
            distanceInMeters = distance * 0.001;
        } else if (fromOption.value === 'mi') {
            distanceInMeters = distance * 1609.34;
        } else if (fromOption.value === 'yrd') {
            distanceInMeters = distance * 0.9144;
        } else if (fromOption.value === 'ft') {
            distanceInMeters = distance * 0.3048;
        } else if (fromOption.value === 'in') {
            distanceInMeters = distance * 0.0254;
        }

        let result = 0;

        if (toOption.value === 'km') {
            result = distanceInMeters / 1000;
        } else if (toOption.value === 'm') {
            result = distanceInMeters;
        } else if (toOption.value === 'cm') {
            result = distanceInMeters / 0.01;
        } else if (toOption.value === 'mm') {
            result = distanceInMeters / 0.001;
        } else if (toOption.value === 'mi') {
            result = distanceInMeters / 1609.34;
        } else if (toOption.value === 'yrd') {
            result = distanceInMeters / 0.9144;
        } else if (toOption.value === 'ft') {
            result = distanceInMeters / 0.3048;
        } else if (toOption.value === 'in') {
            result = distanceInMeters / 0.0254;
        }

        outputDistanaceRef.value = result;
    };

    converButton.addEventListener('click', convert);
}