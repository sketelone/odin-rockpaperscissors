
playGame()

function playGame() {
    // plays five rounds of rock paper scissors
    let computerScore = 0;
    let userScore = 0;
    for (let i=0; i <5; i++) {
        // get and validate user input for player play
        let userPlay = prompt("Rock, paper or scissors?");
        userPlay = userPlay.toLowerCase();
        if (userPlay == null) {
            prompt("You must enter rock, paper or scissors!");
        } else if(userPlay !== "rock" &&
            userPlay !== "paper" &&
            userPlay !== "scissors") {
            prompt("You must enter rock, paper or scissors!");
        }
        // get computer play
        let computerPlay = getComputerPlay();
        // play game using player and computer plays
        let outcome = playRockPaperScissors(userPlay,computerPlay);
        // alert outcome and keep score
        if (outcome == 1) {
            alert("It's a tie!");
        } else if (outcome == 2) {
            alert("Computer wins!");
            computerScore++;
        } else if (outcome == 3) {
            alert("Player wins!");
            userScore++;
        }
        // alert score
        alert("Player: " + userScore + "\nComputer: " + computerScore);
    }
    
} 

function getComputerPlay() {
    // randomly generate computer play
    if (Math.random() < 0.33) {
        return "rock"
    } else if (Math.random() > 0.67){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRockPaperScissors(userPlay,computerPlay) {
    // plays a round of rock paper scissors using computer and player selections
    if (userPlay == computerPlay) {
        return 1 
    } else if (userPlay == "rock") {
        if (computerPlay == "paper") {
            return 2
        } else if (computerPlay == "scissors") {
            return 3
        }
    } else if (userPlay == "paper") {
        if (computerPlay == "scissors") {
            return 2
        } else if (computerPlay == "rock") {
            return 3
        }
    } else if (userPlay == "scissors") {
        if (computerPlay == "rock") {
            return 2
        } else if (computerPlay == "paper") {
            return 3
        }
    }
}