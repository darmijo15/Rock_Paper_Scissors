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

const resultDiv = document.querySelector('#result');

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){playRound('rock', computerPlay())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){playRound('paper', computerPlay())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){playRound('scissors', computerPlay())});

function playRound(playerSelection, computerSelection) {

    const para = document.createElement('p');

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
            ++userScore;
            para.textContent = `Computer selected ${computerSelection}. You won this round! Rock crushes scissors. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            ++userScore;
            para.textContent = `Computer selected ${computerSelection}. You won this round! Paper covers rock. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            ++userScore;
            para.textContent = `Computer selected ${computerSelection}. You won this round! Scissors cuts paper. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            ++computerScore;
            para.textContent = `Computer selected ${computerSelection}. You lost this round. Paper covers rock. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            ++computerScore;
            para.textContent = `Computer selected ${computerSelection}. You lost this round. Scissors cuts paper. Score: ${userScore} - ${computerScore}`;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            ++computerScore;
            para.textContent = `Computer selected ${computerSelection}. You lost this round. Rock crushes scissors. Score: ${userScore} - ${computerScore}`;
        } else {
            para.textContent = `Computer selected ${computerSelection}. Draw, no winner this round. Score: ${userScore} - ${computerScore}`;
        }

    if (userScore === 5) {
        para.textContent = `You win! Final score: ${userScore} - ${computerScore}. To play another round, select rock, paper, or scissors.`;
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        para.textContent = `You lost. Final score: ${userScore} - ${computerScore}. To play another round, select rock, paper, or scissors.`;
        userScore = 0;
        computerScore = 0;
    }
    
    resultDiv.appendChild(para);

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
