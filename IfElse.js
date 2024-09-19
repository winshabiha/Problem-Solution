// Problem 1. Free Drinks
    // - Burger more than 500tk: free Coke
    // - Else Coke: 30tk
var burger = 600;
// if(burger>500){
//     console.log('free coke')
// }
// else{
//     console.log('coke: 30tk')
// }


// Problem 2. Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.
var height = 1.7018; //(kg)
var weight = 80; //(m)
var BMI = weight / (height * height);
// if(BMI < 18.5){
//     console.log('you are underweight')
// }
// else if(BMI >= 18.5 && BMI <=24.9){
//     console.log('you are normal')    
// }
// else if(BMI >=25 && BMI <= 29.9){
//     console.log('you are overweight')
// }
// else{
//     console.log(' you are obese')
// }


//problem 3. Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    // A: 90-100
    // B: 80-89
    // C: 70-79
    // D: 60-69
    // F: 0-59

var score = 96;
    
// if( score>=90){
//         console.log('A')
//     }
// else if(score >= 80){
//         console.log('B')
//     }
// else if(score >= 70){
//         console.log('C')
//     }
// else if(score >= 60){
//         console.log('D')
//     }
// else
//     {console.log('F')
        
//     }


// Problem 4. if you get more then 80 then inside your friend score.
//     If your friend get more than 80. then go for a lunch.
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad
var score = 78;
// if(score >80){
//     console('friend score')
// }
// else if(score <80){
//     console.log('go to home and sleep and act sad')
// }
// else if(60<=score<80){
//     console.log('good luck next time')
// }
// else if(40<=score<60){
//     console.log('keep your friends message unseen')
// }
// else if(score<40){
//     console.log(' block your friend')
// }


// problem 5. you have two numbers in two variables, called: num1, num2
// now declare a variable called result.
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
// write a simple if-else.
// also, write it using ternary operato

var num1 = 60;
var num2 = 30;

// if(num1 > num2){
//     console.log( num1*2)
// }
// else{
//     console.log(num1 + num2)
// }
//ternary operator
// num1 === 60? num1*2 : num1 + num2


// problrm 6. Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
var age = 9;

// if (age < 10){
//     console.log("They can travel with free " )
// }
// else if(students){
//     console.log('Will get 50% discount')
// }
// else if(age>=60){
//     console.log('Will get 15% discount')
// }
// else{
//     console.log('Shall have to buy ticket with fare 800tk')
// }
