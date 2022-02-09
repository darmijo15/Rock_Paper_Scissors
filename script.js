function computerPlay() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
    return 'Rock';
    } else if (number === 1) {
    return 'Paper';
    } else {
    return 'Scissors';
    }
}

let userScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector('.result');
const userSelectionDiv = document.querySelector('#userSelection');
const userScoreDiv = document.querySelector('#userScore');
const computerSelectionDiv = document.querySelector('#computerSelection');
const computerScoreDiv = document.querySelector('#computerScore');

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){playRound('Rock', computerPlay())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){playRound('Paper', computerPlay())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){playRound('Scissors', computerPlay())});

const reset = document.querySelector('#resetBTN');
reset.addEventListener('click', function(){resetGame()});

function playRound(userSelection, computerSelection) {

    if (userSelection === 'Rock' && computerSelection === 'Scissors') {
            ++userScore;
            resultDiv.textContent = `You won this round! Rock crushes scissors.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;

        } else if (userSelection === 'Paper' && computerSelection === 'Rock') {
            ++userScore;
            resultDiv.textContent = `You won this round! Paper covers rock.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;

        } else if (userSelection === 'Scissors' && computerSelection === 'Paper') {
            ++userScore;
            resultDiv.textContent = `You won this round! Scissors cuts paper.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Compter: ${computerScore}`;


        } else if (userSelection === 'Rock' && computerSelection === 'Paper') {
            ++computerScore;

            resultDiv.textContent = `You lost this round. Paper covers rock.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;

        } else if (userSelection === 'Paper' && computerSelection === 'Scissors') {
            ++computerScore;

            resultDiv.textContent = `You lost this round. Scissors cuts paper.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
            
        } else if (userSelection === 'Scissors' && computerSelection === 'Rock') {
            ++computerScore;

            resultDiv.textContent = `You lost this round. Rock crushes scissors.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
            
        } else {

            resultDiv.textContent = `Draw, no winner this round.`;
            userSelectionDiv.textContent = `${userSelection}`;
            computerSelectionDiv.textContent = `${computerSelection}`;
            userScoreDiv.textContent = `User: ${userScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
            
        }

    if (userScore === 5) {
        resultDiv.textContent = `You win! Final score: ${userScore} - ${computerScore}. To play another round, press the reset button or select a weapon.`;
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        resultDiv.textContent = `You lost. Final score: ${userScore} - ${computerScore}. To play another round, press the reset button or select a weapon.`;
        userScore = 0;
        computerScore = 0;
    }

    }

    function resetGame() {
        userScore = 0;
        computerScore = 0;

        resultDiv.textContent = 'Choose your weapon to start the game. The first to 5 points wins the game.';
        userScoreDiv.textContent = `User: ${userScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
    }

