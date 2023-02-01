// ●	Write a program to determine whether a given year is a leap year in the Gregorian calendar.
const prompt = require("prompt-sync")();
const year = prompt("Enter the year : ");
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + ' is a leap year');
            }
            else{
                console.log(year + ' is not a leap year');
            }
        }
        else{
            console.log(year + ' is a leap year');
        }
    }
    else{
        console.log(year + ' is not a leap year');
    }