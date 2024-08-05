let playerScore = 0;
let computerScore = 0;

function getComputerChoice () { //takes computer input using a random function
    let choice = Math.floor (Math.random()*3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    }
}

function getPlayerChoice() { // invalid inputs are ignored, gets player inputs
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    return choice;
}

function playRound (playerChoice , computerChoice) { // Rock paper scissors logic
    if (playerChoice === computerChoice) {
        return "Draw! Neither player has been given a point";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        return "Player Wins! Player has been given a point";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Computer Wins! Computer has been given a point";
    } else if (playerChoice === "scissors" && computerChoice == "rock") {
        computerScore++;
        return "Computer Wins! Computer has been given a point";
    } else if (playerChoice === "scissors" && computerChoice == "paper") {
        playerScore++;
        return "Player Wins! Player has been given a point";
    } else if (playerChoice === "paper" && computerChoice == "rock") {
        playerScore++;
        return "Player Wins! Player has been given a point";
    } else if (playerChoice === "paper" && computerChoice == "scissors") {
        computerScore++;
        return "Computer Wins! Computer has been given a point";
    }
}

while (playerScore <= 5 || computerScore < 5) { //Logic loops until player/computer reaches 5
    console.log(playRound(getPlayerChoice() , getComputerChoice()));
    if (playerScore === 5) {
        console.log("Player wins the war! 5 points");
        playerScore, computerScore ===0;
        break;

    } else if (computerScore === 5) {
        console.log ("Computer wins the war! 5 points");
        playerScore, computerScore === 0;
        break;
    }
}
