
game()

function game() {
    // plays five rounds of rock paper scissors
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0; i <5; i++) {
        // get and validate user input for player play
        let playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == null) {
            prompt("You must enter rock, paper or scissors!");
        } else if(playerSelection !== "rock" &&
            playerSelection !== "paper" &&
            playerSelection !== "scissors") {
            prompt("You must enter rock, paper or scissors!");
        }
        // get computer play
        let computerSelection = computerPlay();
        // play game using player and computer plays
        let outcome = rockPaperScissors(playerSelection,computerSelection);
        // alert outcome and keep score
        if (outcome == 1) {
            alert("It's a tie!");
        } else if (outcome == 2) {
            alert("Computer wins!");
            computerScore++;
        } else if (outcome == 3) {
            alert("Player wins!");
            playerScore++;
        }
        // alert score
        alert("Player: " + playerScore + "\nComputer: " + computerScore);
    }
    
} 

function computerPlay() {
    // randomly generate computer play
    if (Math.random() < 0.33) {
        return "rock"
    } else if (Math.random() > 0.67){
        return "paper"
    } else {
        return "scissors"
    }
}

function rockPaperScissors(playerSelection,computerSelection) {
    // plays a round of rock paper scissors using computer and player selections
    if (playerSelection == computerSelection) {
        return 1 
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return 2
        } else if (computerSelection == "scissors") {
            return 3
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return 2
        } else if (computerSelection == "rock") {
            return 3
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return 2
        } else if (computerSelection == "paper") {
            return 3
        }
    }
}