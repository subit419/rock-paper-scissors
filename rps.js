function getComputerChoice() {
    let possibleChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computersChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection) {
        return "Tie! You both picked " + computerSelection;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        return "You Win! Rock beats Paper";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        return "You Win! Paper beats Rock.";
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        return "You Lose! Scissors beats Paper";
    } else {
        return "Invalid choice. Please enter either rock, paper, or scissors."
    }  
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = String (prompt ("Enter either rock, paper, or scissors", ""));
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection).includes("Win")) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).includes("Lose")) {
            computerScore++;
        } else {
            i--;
        }

        console.log (playRound(playerSelection, computerSelection));
    }
    console.log (`Game of 5 rounds has ended. Player: ${playerScore}, Computer: ${computerScore}`)
}

game();
