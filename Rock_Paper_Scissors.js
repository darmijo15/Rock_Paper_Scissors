function computerPlay() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
    return 'rock';
    } else if (number === 1) {
    return 'paper';
    } else {
    return 'scissors';
    }
}

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
            ++userScore;
            return `You won this round! Rock crushes scissors. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            ++userScore;
            return `You won this round! Paper covers rock. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            ++userScore;
            return `You won this round! Scissors cuts paper. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            ++computerScore;
            return `You lost this round. Paper covers rock. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            ++computerScore;
            return `You lost this round. Scissors cuts paper. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            ++computerScore;
            return `You lost this round. Rock crushes scissors. Score: ${userScore} - ${computerScore}`;
        } else {
            return `Draw, no winner this round. Score: ${userScore} - ${computerScore}`;
        }
    }

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (userScore > computerScore) {
        console.log(`You won! Final score: ${userScore} - ${computerScore}`);
    } else if (userScore < computerScore) {
        console.log(`You lose. Final score: ${userScore} - ${computerScore}`);
    } else {
        console.log(`Draw, no winner declared. Final Score: ${userScore} - ${computerScore}`);
    }
}

game();
