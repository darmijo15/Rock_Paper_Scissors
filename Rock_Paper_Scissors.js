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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock crushess scissors.';
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper covers rock.';
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors cuts paper.';
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper covers rock.';
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors cuts paper.';
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock crushes scissors.';
        } else {
        return 'Draw! Play another round.';
        }
        }
        
const playerSelection = 'ROck';
const computerSelection = computerPlay();
        
console.log(playRound(playerSelection, computerSelection));        
