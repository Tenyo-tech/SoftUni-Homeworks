function attachEventsListeners() {

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");


    
    const daysBtn = document.getElementById("daysBtn").addEventListener("click", onClickDays);
    const hoursBtn = document.getElementById("hoursBtn").addEventListener("click", onClickHours);;
    const minutesBtn = document.getElementById("minutesBtn").addEventListener("click", onClickMinutes);;
    const secondsBtn = document.getElementById("secondsBtn").addEventListener("click", onClickSeconds);;

    function onClickDays()
    {
        const convertUnit = days.value;
        const convH = Number(convertUnit) * 24;
        const convM = convH * 60;
        const convS = convM * 60 ;

        hours.value = convH;
        minutes.value = convM;
        seconds.value = convS;
    }
    function onClickHours()
    {
        const convertUnit = hours.value;

        const convD = Number(convertUnit) / 24;

        const convM = convD * 24 * 60;
        const convS = convM * 60 ;

        days.value = convD;
        minutes.value = convM;
        seconds.value = convS;

    }
    function onClickMinutes()
    {
        const convertUnit = minutes.value;

        const convD =  Number(convertUnit) / 60 / 24 ;
        const convH =  convD * 24;
        const convS = convH * 60 * 60 ;

        days.value = convD;
        hours.value = convH;
        seconds.value = convS;
    }
    function onClickSeconds()
    {
        const convertUnit = seconds.value;

        const convM = Number(convertUnit) / 60;
        const convH = convM / 60;
        const convD = convH / 24;

        minutes.value = convM;
        hours.value = convH;
        days.value = convD;
    }
    
}