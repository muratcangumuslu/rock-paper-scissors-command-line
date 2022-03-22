alert("This is a simple command line rock paper scissors game. \nChoose one of the three options to see if you win against the computer. First one to reach 3 wins.")

let userChoice = ""
let computerChoice = "";
let computerChoiceDecider;
let result;
let userCounter = 0;
let compCounter = 0;


while (userCounter < 3 && compCounter < 3) {
    compChoice()
    game()
    validAnswerChecker()
}

if (userCounter == 3) {
    alert("You have won. Refresh the page to play again.")
} else alert("The computer has won. Refresh the page to play again")


function game() {
    userChoice = prompt("What is your choice?").toLowerCase();
    if (userChoice === computerChoice) {
        result = alert("Computer has choosen the same. It is a draw.");
    } else if (userChoice === "rock" && computerChoice === "paper") {
        result = alert("Computer has chosen paper. You have lost");
        compCounter ++;
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        result = alert("Computer has chosen scissors. You have won");
        userCounter ++;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        result = alert("Computer has chosen scissors. You have lost");
        compCounter ++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        result = alert("Computer has chosen rock. You have won");
        userCounter ++;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        result = alert("Computer has chosen rock. You have lost");
        compCounter ++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        result = alert("Computer has chosen paper. You have won");
        userCounter ++;
    }
}

function validAnswerChecker() {
    if (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper") {
        alert("Please choose a valid option (rock, paper, or scissors).");
    }
}

function compChoice () {
    computerChoiceDecider = Math.floor(Math.random() * 3);
    if (computerChoiceDecider == 0) {
        computerChoice = "rock";
    } else if (computerChoiceDecider == 1) {
        computerChoice = "paper";
    } else computerChoice = "scissors";
}