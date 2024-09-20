function calculator(){
    let day;
    let month;
    let year;


    let currentDay = parseInt(cd.value.slice(8, 10), 10);
    let currentMonth = parseInt(cd.value.slice(5, 7), 10);
    let currentYear = parseInt(cd.value.slice(0, 4), 10);
    console.log('current year :- ', currentYear, currentMonth, currentDay);

    let birthDay = parseInt(dob.value.slice(8, 10), 10); // Fixed: dob instead of cd for birthdate
    let birthMonth = parseInt(dob.value.slice(5, 7), 10);
    let birthYear = parseInt(dob.value.slice(0, 4), 10);
    console.log('dob', birthYear, birthMonth, birthDay);

    // Correct day calculation
    if (currentDay >= birthDay) {
        day = currentDay - birthDay;
    } else {
        day = currentDay + new Date(currentYear, currentMonth - 1, 0).getDate() - birthDay;
        currentMonth--;
    }

    // Correct month calculation
    if (currentMonth >= birthMonth) {
        month = currentMonth - birthMonth;
    } else {
        month = currentMonth + 12 - birthMonth;
        currentYear--; // Decrement year properly
    }

    // Correct year calculation
    year = currentYear - birthYear;

    // Display result or error
    if (year < 0) {
        AgeText.innerHTML = "Invalid date";
    } else {
        AgeText.innerHTML = year + " year(s), " + month + " month(s), " + day + " day(s)";
    }
}
