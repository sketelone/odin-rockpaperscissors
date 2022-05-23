
function computerPlay() {
    if (Math.floor(Math.random()) < 0.33) {
        return "Rock"
    } else if (Math.floor(Math.random()) > 0.67){
        return "Paper"
    } else {
        return "Scissors"
    }
}

