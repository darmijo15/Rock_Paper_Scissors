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

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){playRound('rock', computerPlay())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){playRound('paper', computerPlay())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){playRound('scissors', computerPlay())});

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
            ++userScore;
            console.log(computerSelection);
            console.log(`You won this round! Rock crushes scissors. Score: ${userScore} - ${computerScore}`);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            ++userScore;
            console.log(computerSelection);
            console.log(`You won this round! Paper covers rock. Score: ${userScore} - ${computerScore}`);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            ++userScore;
            console.log(computerSelection);
            console.log(`You won this round! Scissors cuts paper. Score: ${userScore} - ${computerScore}`);
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            ++computerScore;
            console.log(computerSelection);
            console.log(`You lost this round. Paper covers rock. Score: ${userScore} - ${computerScore}`);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            ++computerScore;
            console.log(computerSelection);
            console.log(`You lost this round. Scissors cuts paper. Score: ${userScore} - ${computerScore}`);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            ++computerScore;
            console.log(computerSelection);
            console.log(`You lost this round. Rock crushes scissors. Score: ${userScore} - ${computerScore}`);
        } else {
            console.log(computerSelection);
            console.log(`Draw, no winner this round. Score: ${userScore} - ${computerScore}`);
        }
    }



// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Rock, paper, or scissors?");
//         playerSelection = playerSelection.toLowerCase();
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }

//     if (userScore > computerScore) {
//         console.log(`You won! Final score: ${userScore} - ${computerScore}`);
//     } else if (userScore < computerScore) {
//         console.log(`You lose. Final score: ${userScore} - ${computerScore}`);
//     } else {
//         console.log(`Draw, no winner declared. Final Score: ${userScore} - ${computerScore}`);
//     }
// }

// game();
