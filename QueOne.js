// ●	Write a program to find the area of a triangle where the length of the sides is 2, 3 and 4.


const sideOne=2, sideTwo=3, sideThree=4;
const squareRoot=(sideOne+sideTwo+sideThree)/2;
const area = Math.sqrt(squareRoot*((squareRoot-sideOne)*(squareRoot-sideTwo)*(squareRoot-sideThree)));
console.log("The area of triangle is: " + area);