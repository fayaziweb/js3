//Free Drinks
//- Burger more than 500tk: free Coke
//- Else Coke: 30tk

getCokePrice(burgerPrice) {
    if (burgerPrice > 500) {
        return "Free Coke";
    } else {
        return "Coke: 30 Tk";
    }
}
const burgerPrice1 = 600; 
console.log(getCokePrice(burgerPrice1)); 

const burgerPrice2 = 400; 
console.log(getCokePrice(burgerPrice2)); 

// BMI Calculator and Health Category


// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

function calculateBMI(weight, height) {
    
    const bmi = weight / (height * height);
    
   
    let category;
    
    if (bmi < 18.5) {
        category = "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "You are normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "You are overweight.";
    } else {
        category = "You are obese.";
    }

    return { bmi: bmi.toFixed(2), category: category };
}

// Grade Calculator


// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

function getGrade(score) {
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >= 80 && score < 90) {
        grade = "B";
    } else if (score >= 70 && score < 80) {
        grade = "C";
    } else if (score >= 60 && score < 70) {
        grade = "D";
    } else if (score >= 0 && score < 60) {
        grade = "F";
    } else {
        return "Invalid score. Please enter a score between 0 and 100.";
    }

    return `Your grade is: ${grade}`;
}
// Ticket fare Calculator. First take a variable as money.
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
function calculateTicketFare(age, isStudent) {
    const regularFare = 800;
    let fare;

    if (age < 10) {
        fare = 0; // Free for children under 10
    } else if (isStudent) {
        fare = regularFare * 0.5; // 50% discount for students
    } else if (age >= 60) {
        fare = regularFare * 0.85; // 15% discount for senior citizens
    } else {
        fare = regularFare; // Regular fare
    }

    return fare;
}
