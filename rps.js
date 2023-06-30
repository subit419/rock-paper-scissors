function getComputerChoice() {
    let possibleChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computersChoice;
}

function playRound(e) {
    const playerSelection = this.innerText;
    console.log(`player selection: ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`computer selection: ${computerSelection}`);
    let resultMessage = "";
    const results = document.querySelector('#result');

    if (playerSelection.toUpperCase() === computerSelection) {
        resultMessage = ("Tie! You both picked " + computerSelection);
        
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        resultMessage = ("You Lose! Paper beats Rock.");
        
        
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        resultMessage = ("You Win! Rock beats Paper");
        
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        
        resultMessage = ("You Lose! Rock beats Scissors.");
        
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        resultMessage =("You Win! Scissors beats Paper");
        
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        resultMessage = ("You Win! Paper beats Rock.")
        
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        resultMessage = ("You Lose! Scissors beats Paper");  
    }

    results.innerText = resultMessage;
    

    return;
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

//game();

const buttons = document.querySelectorAll('button');
console.log(`Found ${buttons.length} buttons.`);
console.log(buttons);

buttons.forEach(button => button.addEventListener("click", playRound));
