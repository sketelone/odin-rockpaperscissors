
function computerPlay() {
    if (Math.floor(Math.random()) < 0.33) {
        return "rock"
    } else if (Math.floor(Math.random()) > 0.67){
        return "paper"
    } else {
        return "scissors"
    }
}

function rockPaperScissors(playerSelection,computerSelection) {
    playerSelection = toLowerCase(playerSelection)
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer wins!"
        } else if (computerSelection == "scissors") {
            return "Player wins!"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "Computer wins!"
        } else if (computerSelection == "rock") {
            return "Player wins!"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "Computer wins!"
        } else if (computerSelection == "paper") {
            return "Player wins!"
        }
    }
}