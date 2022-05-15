function attachEventsListeners() {
        let inputDays = document.getElementById('days');
        let inputHours = document.getElementById('hours');
        let inputMinutes = document.getElementById('minutes');
        let inputSeconds = document.getElementById('seconds');

        let rations = {
            days:1,
            hours:24,
            minutes:1440,
            seconds:86400
        };

        document.getElementById('daysBtn').addEventListener('click', onConvert);
        document.getElementById('hoursBtn').addEventListener('click', onConvert);
        document.getElementById('minutesBtn').addEventListener('click', onConvert);
        document.getElementById('secondsBtn').addEventListener('click', onConvert);

        function convert (value,unit){
            let days = value/rations[unit];

            return{
                days:days,
                hours:days*rations.hours,
                minutes:days*rations.minutes,
                seconds:days*rations.seconds
            };
        }

        function onConvert(event){
            let input = event.target.parentElement.querySelector('input[type="text"]');
            let time = convert(Number(input.value),input.id);
            
            inputDays.value = time.days;
            inputHours.value = time.hours;
            inputMinutes.value = time.minutes;
            inputSeconds.value = time.seconds;
        }
}