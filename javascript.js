
playGame()

function playGame() {
    // plays five rounds of rock paper scissors
    let computerScore = 0;
    let userScore = 0;
    for (let i=0; i <5; i++) {
        // get and validate user input for player play
        let input = prompt("Rock, paper or scissors?");
        userPlay = input.toLowerCase();
        console.log(userPlay)
        // validation = validateInput(userPlay)
        while (validateInput(userPlay)==false){
            input = prompt("You must enter rock, paper or scissors!");
            userPlay = input.toLowerCase();
            // validation = validateInput(userPlay)
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
    finalScore = getFinalScore(computerScore, userScore);
    if (finalScore == 1) {
        alert("You're as smart as a computer!");
    } else if (finalScore == 2) {
        alert("You're dumber than a computer!");
        computerScore++;
    } else if (finalScore == 3) {
        alert("You're smarter than a computer!");
        userScore++;
    }
    
} 

function getComputerPlay() {
    // randomly generate computer play
    if (Math.random() < 0.33) {
        return "rock";
    } else if (Math.random() > 0.67){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRockPaperScissors(userPlay,computerPlay) {
    // plays a round of rock paper scissors using computer and player selections
    if (userPlay == computerPlay) {
        return 1;
    } else if (userPlay == "rock") {
        if (computerPlay == "paper") {
            return 2;
        } else if (computerPlay == "scissors") {
            return 3;
        }
    } else if (userPlay == "paper") {
        if (computerPlay == "scissors") {
            return 2;
        } else if (computerPlay == "rock") {
            return 3;
        }
    } else if (userPlay == "scissors") {
        if (computerPlay == "rock") {
            return 2;
        } else if (computerPlay == "paper") {
            return 3;
        }
    }
}

function getFinalScore(computerScore,userScore) {
    if (computerScore == userScore) {
        return 1;
    } else if (computerScore > userScore) {
        return 2;
    } else {
        return 3;
    }
}

function validateInput(input) {
    //validates user input
    if (input == null) {
        return false;
    } else if(input == "rock" ||
        input == "paper" ||
        input == "scissors") {
        return true;
    } else {
        return false;
    }
}