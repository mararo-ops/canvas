function calculatePower(current,voltage){
    return power=current*voltage;
}
const solution= calculatePower(50,20)
console.log(solution)

function fahrenheitToCelcius(fahrenheit){
    return(fahrenheit-32)*5/9;
}
let celsius=fahrenheitToCelcius(68)
console.log(celsius)

const num = 5;

if (num > 0) {
	console.log("The number is positive.");
};
const number = -10;

if (number > 0)
	console.log("The number is positive.");
else
	console.log("The number is negative");

const value = 10;

    let result = value >= 0 ? "Positive" : "Negative";
    
    console.log(`The number is ${result}.`);

    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
        };
        
        const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
const lineThree = "Joy to the fishes in the deep blue sea";
const lineFour = "Joy to you and me";

const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
chorus;
const age = 20;
const ageMessage = age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!";
console.log(ageMessage);

function checkAbilities(age) {
    if (age >= 21) {
        console.log("You can work, enlist, be considered as an adult, and drink!");
    } else if (age >= 18) {
        console.log("You can work, enlist, and be considered as an adult!");
    } else if (age >= 16) {
        console.log("You can work!");
    } else {
        console.log("You're still too young for these milestones.");
    }
}


// Testing the function
checkAbilities(15);  // Outputs: "You're still too young for these milestones."
checkAbilities(16);  // Outputs: "You can work!"
checkAbilities(19);  // Outputs: "You can work, enlist, and be considered as an adult!"
checkAbilities(22);  // Outputs: "You can work, enlist, be considered as an adult, and drink!"
function checkAbilities(age) {
    if (age >= 21) {
        return "You can work, enlist, be considered as an adult, and drink!";
    } else if (age >= 18) {
        return "You can work, enlist, and be considered as an adult!";
    } else if (age >= 16) {
        return "You can work!";
    } else {
        return "You're still too young for these milestones.";
    }
}
console.log(age)

const jina ="Daniel";
let greeting;
if (jina ==="Daniel"){
    greeting="Hello your majesty"
}
else if (jina==="Shrek"){
    greeting="fiona dumped you"
}
console.log(greeting);
