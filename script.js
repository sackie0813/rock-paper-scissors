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

function playRound (playerChoice, computerChoice) { // Game Logic +_ Score tracking updates
    // Game loop
    if (playerScore === 5) {
        currentScore.textContent = "Player has won the war!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        currentScore.textContent = "Computer has won the war!";
        playerScore = 0;
        computerScore = 0;
    }

//Game Logic + Score Tracking
    else if (computerChoice === playerChoice) {
        currentScore.textContent = "Draw! " + "Your Score:" + playerScore + "\n" + "Computer Score: " + computerScore;
        return console.log("Draw!");
        
    } else if ( (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") || 
                (playerChoice === "scissors" && computerChoice === "paper")) {
                    playerScore++;
                    currentScore.textContent = "You Win! " + "Your Score: " + playerScore + "\n" + "Computer Score: " + computerScore;
                    return console.log("Player Wins!");
    } else {
        computerScore++;
        currentScore.textContent = "You Lose! " + "Your Score: " + playerScore + "\n" + "Computer Score: " + computerScore;
        return console.log("Computer Wins!");
    }
} 


// Ui logic using DOM
const playRockButton = document.createElement("button");
playRockButton.textContent = "Rock";
playRockButton.style.padding = "32px";
playRockButton.addEventListener("click" , function() {
    playRound("rock" , getComputerChoice());
});
document.body.appendChild(playRockButton);

const playScissorsButton = document.createElement("button");
playScissorsButton.textContent = "Scissors";
playScissorsButton.style.padding = "32px";
playScissorsButton.addEventListener("click" , function() {
    playRound ("scissors" , getComputerChoice());
});
document.body.appendChild(playScissorsButton);

const playPaperButton = document.createElement("button");
playPaperButton.textContent = "Paper";
playPaperButton.style.padding = "32px";
playPaperButton.addEventListener("click" , function() {
    playRound("paper" , getComputerChoice());
});
document.body.appendChild(playPaperButton);

const divContainer = document.createElement("div");
divContainer.style.border = "solid black";
divContainer.style.padding = ("32px");
document.body.appendChild(divContainer);

const currentScore = document.createElement("p");
currentScore.textContent = "Click a button to play rock-paper-scissors! First to 5 wins!";
divContainer.appendChild(currentScore);




