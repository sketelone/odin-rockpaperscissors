
const container = document.querySelector('.container');
container.style.padding = '20px';

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.style.backgroundColor = "blue";
    button.style.padding = "15px";
    button.addEventListener('click', playRound);
});
// buttons.forEach(button => button.addEventListener('click', logText));






const roundResult = document.createElement('h4');
const score = document.createElement('h4');
const gameResult = document.createElement('h3');

const result = document.createElement('div');
result.style.border = '6px solid blue';
result.style.borderRadius = '25px';



function logText(e) {
    console.log(e.srcElement.id);
}

//initialize game variables
let round = 0;
let computerScore = 0;
let userScore = 0;

function playRound(e) {
        if (round == 5) {
            resetGame();
        }
        userPlay = e.srcElement.id;
        console.log(userPlay)
        // // validation = validateInput(userPlay)
        // while (validateInput(userPlay)==false){
        //     input = prompt("You must enter rock, paper or scissors!");
        //     userPlay = e.srcElement.id;
        //     // validation = validateInput(userPlay)
        // }
        // get computer play
        let computerPlay = getComputerPlay();
        // play game using player and computer plays
        let outcome = playRockPaperScissors(userPlay,computerPlay);
        // alert outcome and keep score
        if (outcome == 1) {
            roundResult.textContent = "It's a tie!";
        } else if (outcome == 2) {
            roundResult.textContent = "Computer wins!";
            computerScore++;
        } else if (outcome == 3) {
            roundResult.textContent = "Player wins!";
            userScore++;
        }

        //update results section
        document.body.appendChild(result)
        result.appendChild(roundResult)
        score.textContent ="Player: " + userScore + "\nComputer: " + computerScore;
        result.appendChild(score)

        round++;    

    if (round == 5) {
        finalScore = getFinalScore(computerScore, userScore);
        if (finalScore == 1) {
            gameResult.textContent = "Congrats! You're as smart as a computer!";
        } else if (finalScore == 2) {
            gameResult.textContent = "Congrats! You're dumber than a computer!";
            computerScore++;
        } else if (finalScore == 3) {
            gameResult.textContent = "Congrats! You're smarter than a computer!";
            userScore++;
        }
        result.appendChild(gameResult);
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

// function validateInput(input) {
//     //validates user input
//     if (input == null) {
//         return false;
//     } else if(input == "rock" ||
//         input == "paper" ||
//         input == "scissors") {
//         return true;
//     } else {
//         return false;
//     }
// }

function resetGame() {
    computerScore = 0;
    userScore = 0;
    round = 0;
    result.removeChild(gameResult);
}