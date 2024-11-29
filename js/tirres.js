let now = new Date();
let currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

// set up the bus schedule arrays for weekdays and weekends
let weekdayBusSchedule = [
    { hour: 5, minute: 0 },
    { hour: 5, minute: 25 },
    { hour: 5, minute: 50 },
    { hour: 6, minute: 15 },
    { hour: 6, minute: 30 },
    { hour: 6, minute: 45 },
    { hour: 7, minute: 0 },
    { hour: 7, minute: 15 },
    { hour: 7, minute: 30 },
    { hour: 7, minute: 45 },
    { hour: 8, minute: 5 },
    { hour: 8, minute: 25 },
    { hour: 8, minute: 45 },
    { hour: 9, minute: 0 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 9, minute: 45 },
    { hour: 10, minute: 0 },
    { hour: 10, minute: 15 },
    { hour: 10, minute: 30 },
    { hour: 10, minute: 45 },
    { hour: 11, minute: 0 },
    { hour: 11, minute: 20 },
    { hour: 11, minute: 45 },
    { hour: 12, minute: 0 },
    { hour: 12, minute: 15 },
    { hour: 12, minute: 35 },
    { hour: 12, minute: 55 },
    { hour: 13, minute: 20 },
    { hour: 13, minute: 30 },
    { hour: 13, minute: 45 },
    { hour: 14, minute: 15 },
    { hour: 14, minute: 45 },
    { hour: 15, minute: 15 },
    { hour: 15, minute: 45 },
    { hour: 16, minute: 5 },
    { hour: 16, minute: 25 },
    { hour: 16, minute: 50 },
    { hour: 17, minute: 15 },
    { hour: 17, minute: 40 },
    { hour: 17, minute: 50 },
    { hour: 18, minute: 0 },
    { hour: 18, minute: 30 },
    { hour: 18, minute: 45 },
    { hour: 19, minute: 0 },
    { hour: 19, minute: 15 },
    { hour: 19, minute: 35 },
    { hour: 19, minute: 55 },
    { hour: 20, minute: 10 },
    { hour: 20, minute: 25 },
    { hour: 20, minute: 40 },
    { hour: 20, minute: 45 },
    { hour: 21, minute: 15 },
    { hour: 21, minute: 40 },
    { hour: 22, minute: 0 },
    { hour: 22, minute: 15 },
    { hour: 22, minute: 35 },
    { hour: 23, minute: 15 },
    { hour: 0, minute: 0 },
    { hour: 0, minute: 50 }
];

let weekendBusSchedule = [
    { hour: 5, minute: 0 },
    { hour: 5, minute: 30 },
    { hour: 6, minute: 0 },
    { hour: 6, minute: 25 },
    { hour: 6, minute: 50 },
    { hour: 7, minute: 10 },
    { hour: 7, minute: 30 },
    { hour: 7, minute: 55 },
    { hour: 8, minute: 15 },
    { hour: 8, minute: 35 },
    { hour: 9, minute: 0 },
    { hour: 9, minute: 25 },
    { hour: 9, minute: 50 },
    { hour: 10, minute: 20 },
    { hour: 10, minute: 50 },
    { hour: 11, minute: 20 },
    { hour: 12, minute: 10 },
    { hour: 12, minute: 30 },
    { hour: 12, minute: 50 },
    { hour: 13, minute: 15 },
    { hour: 13, minute: 40 },
    { hour: 14, minute: 10 },
    { hour: 15, minute: 15 },
    { hour: 15, minute: 45 },
    { hour: 16, minute: 15 },
    { hour: 16, minute: 45 },
    { hour: 17, minute: 40 },
    { hour: 18, minute: 10 },
    { hour: 18, minute: 40 },
    { hour: 19, minute: 5 },
    { hour: 19, minute: 30 },
    { hour: 19, minute: 50 },
    { hour: 20, minute: 15 },
    { hour: 20, minute: 35 },
    { hour: 21, minute: 20 },
    { hour: 21, minute: 55 },
    { hour: 23, minute: 20 },

    // add the rest of the weekend bus schedule times here
];

// find the next bus time
let nextBus = null;
if (currentDay >= 1 && currentDay <= 5) { // weekday (Monday to Friday)
    for (var i = 0; i < weekdayBusSchedule.length; i++) {
        let busTime = weekdayBusSchedule[i];
        if (busTime.hour > currentHours || (busTime.hour == currentHours && busTime.minute >= currentMinutes)) {
            nextBus = busTime;
            break;
        }
    }
} else { // weekend (Saturday or Sunday)
    for (var i = 0; i < weekendBusSchedule.length; i++) {
        let busTime = weekendBusSchedule[i];
        if (busTime.hour > currentHours || (busTime.hour == currentHours && busTime.minute >= currentMinutes)) {
            nextBus = busTime;
            break;
        }
    }
}

// display the next bus time
if (nextBus) {
    var nextBusString = nextBus.hour + ":" + (nextBus.minute < 10 ? "0" + nextBus.minute : nextBus.minute);
    document.getElementById("next-bus").innerHTML = "Siguiente colectivo " + nextBusString;
} else if (currentDay >= 1 && currentDay <= 5) { // weekday (Monday to Friday) and no more buses today
    document.getElementById("next-bus").innerHTML = "Hoy ya no hay mas colectivos";
} else { // weekend (Saturday or Sunday)
    document.getElementById("next-bus").innerHTML = "Ups";
}