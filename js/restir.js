let now = new Date();
let currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

// set up the bus schedule arrays for weekdays and weekends
let weekdayBusSchedule = [
        { hour: 4, minute: 25 },
        { hour: 4, minute: 45 },
        { hour: 5, minute: 00 },
        { hour: 5, minute: 20 },
        { hour: 5, minute: 45 },
        { hour: 6, minute: 00 },
        { hour: 6, minute: 15 },
        { hour: 6, minute: 30 },
        { hour: 6, minute: 45 },
        { hour: 7, minute: 00 },
        { hour: 7, minute: 15 },
        { hour: 7, minute: 45 },
        { hour: 8, minute: 00 },
        { hour: 8, minute: 15 },
        { hour: 8, minute: 30 },
        { hour: 8, minute: 45 },
        { hour: 9, minute: 00 },
        { hour: 9, minute: 30 },
        { hour: 9, minute: 45 },
        { hour: 10, minute: 00 },
        { hour: 10, minute: 15 },
        { hour: 10, minute: 30 },
        { hour: 10, minute: 45 },
        { hour: 11, minute: 00 },
        { hour: 11, minute: 15 },
        { hour: 11, minute: 25 },
        { hour: 11, minute: 42 },
        { hour: 12, minute: 00 },
        { hour: 12, minute: 15 },
        { hour: 12, minute: 30 },
        { hour: 12, minute: 50 },
        { hour: 13, minute: 10 },
        { hour: 13, minute: 30 },
        { hour: 14, minute: 00 },
        { hour: 14, minute: 30 },
        { hour: 15, minute: 00 },
        { hour: 15, minute: 25 },
        { hour: 15, minute: 50 },
        { hour: 16, minute: 10 },
        { hour: 16, minute: 30 },
        { hour: 16, minute: 50 },
        { hour: 17, minute: 10 },
        { hour: 17, minute: 45 },
        { hour: 18, minute: 00 },
        { hour: 18, minute: 15 },
        { hour: 18, minute: 30 },
        { hour: 18, minute: 45 },
        { hour: 19, minute: 00 },
        { hour: 19, minute: 30 },
        { hour: 19, minute: 45 },
        { hour: 20, minute: 00 },
        { hour: 20, minute: 25 },
        { hour: 20, minute: 50 },
        { hour: 21, minute: 10 },
        { hour: 22, minute: 00 },
        { hour: 22, minute: 20 },
        { hour: 22, minute: 40 },
        { hour: 23, minute: 15 },
        { hour: 23, minute: 40 },
        { hour: 00, minute: 15 },
         // add the rest of the bus schedule times here
    ];

let weekendBusSchedule = [
    { hour: 4, minute: 25 },
    { hour: 4, minute: 55 },
    { hour: 5, minute: 25 },
    { hour: 5, minute: 50 },
    { hour: 6, minute: 10 },
    { hour: 6, minute: 30 },
    { hour: 6, minute: 50 },
    { hour: 7, minute: 15 },
    { hour: 7, minute: 35 },
    { hour: 7, minute: 55 },
    { hour: 8, minute: 20 },
    { hour: 8, minute: 45 },
    { hour: 9, minute: 10 },
    { hour: 9, minute: 40 },
    { hour: 10, minute: 10 },
    { hour: 10, minute: 40 },
    { hour: 11, minute: 10 },
    { hour: 11, minute: 30 },
    { hour: 11, minute: 50 },
    { hour: 12, minute: 10 },
    { hour: 12, minute: 35 },
    { hour: 13, minute: 00 },
    { hour: 13, minute: 35 },
    { hour: 14, minute: 05 },
    { hour: 14, minute: 35 },
    { hour: 15, minute: 05 },
    { hour: 15, minute: 35 },
    { hour: 16, minute: 05 },
    { hour: 16, minute: 35 },
    { hour: 17, minute: 00 },
    { hour: 17, minute: 30 },
    { hour: 18, minute: 00 },
    { hour: 18, minute: 25 },
    { hour: 18, minute: 50 },
    { hour: 19, minute: 10 },
    { hour: 19, minute: 35 },
    { hour: 20, minute: 00 },
    { hour: 20, minute: 40 },
    { hour: 21, minute: 20 },
    { hour: 22, minute: 45 },
    { hour: 00, minute: 15 },

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