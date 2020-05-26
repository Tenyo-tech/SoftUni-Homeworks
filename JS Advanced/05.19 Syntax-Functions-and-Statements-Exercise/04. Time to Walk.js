function solve(steps, stepLenght, speed)
{
    let totalDistanceInMeters = steps * stepLenght;
    let breakTimeMin = Math.floor(totalDistanceInMeters / 500);
    let breakTimeSec = breakTimeMin * 60;
    let speedInMeters = speed / 3.6 ;
    let travelTime = totalDistanceInMeters / speedInMeters;

    let totalTime = travelTime + breakTimeSec;

    let timeHr = Math.floor(totalTime / 3600);
    let timeMin = Math.floor((totalTime - (timeHr * 3600)) / 60);
    let timeSec = (totalTime - (timeHr * 3600) - (timeMin * 60));

    console.log(`${totalTime}`);
    console.log(`${timeHr}`);
    console.log(`${timeMin}`);
    console.log(`${timeSec}`);

    console.log((timeHr < 10 ? "0" : ""))
}

solve(4000,0.6,5);

function solve2(steps, length, speed) {
    let stepsNumber = Number(steps);
    let stepsMetersHr = Number(length);
    let studentSpeed = Number(speed);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + 
    (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + 
    (timeSec < 10 ? "0" : "") + timeSec);
}

solve2(100000, 0.60, 5);
solve2(2564, 0.70, 5.5);