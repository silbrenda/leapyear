
function isLeap(year) {
        
    let yearBy4 = year % 4 === 0;
    let yearBy100 = year % 100 === 0;
    let yearBy400 = year % 400 === 0;

    let leapYear = yearBy4 && (!yearBy100 || yearBy400);

    if (leapYear) {
        console.log("Leap year.")
    }
    else {
        console.log("Not leap year.");
    }
        
}

isLeap(2024);