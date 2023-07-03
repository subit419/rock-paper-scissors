function getComputerChoice() {
    let possibleChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computersChoice;
}

function playRound(e) {
    
    const playerSelection = e.srcElement.id;
    console.log(`player selection: ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`computer selection: ${computerSelection}`);
    let updatedGameMessage = "";
    let updatedMessageReason = "";

    const gameMessage = document.querySelector('.gameMessage');
    console.log(gameMessage);
    const messageReason = document.querySelector('.messageReason');

    if (playerSelection.toUpperCase() === computerSelection) {
        updatedGameMessage = "Tie!";
        updatedMessageReason = ("You both picked " + playerSelection);
        
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        updatedGameMessage = "You Lose!";
        updatedMessageReason = "Paper beats Rock!";
        
        
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        updatedGameMessage = "You Win!";
        updatedMessageReason = "Rock beats Paper!";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        
        updatedGameMessage = "You Lose!";
        updatedMessageReason = "Rock beats Scissors!";
        
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        updatedGameMessage = "You Win!";
        updatedMessageReason = "Scissors beats Paper!";
        
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        updatedGameMessage = "You Win!";
        updatedMessageReason = "Paper beats Rock!";
        
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        updatedGameMessage = "You Lose!";
        updatedMessageReason = "Scissors beats Paper!";  
    }

    gameMessage.innerText = updatedGameMessage;
    messageReason.innerText = updatedMessageReason;
    

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
