function getComputerChoice() {
    let possibleChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computersChoice;
}

function playRound(e) {
    const playerSelectionDisplay = document.querySelector('.playerChoice');
    const computerSelectionDisplay = document.querySelector('.computerChoice');
    const gameMessage = document.querySelector('.gameMessage');
    const messageReason = document.querySelector('.messageReason');
    const playerScoreDisplay = document.querySelector('.playerScore');
    const computerScoreDisplay = document.querySelector('.computerScore');

    const playerSelection = e.srcElement.id;
    console.log(`player selection: ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`computer selection: ${computerSelection}`);
    let updatedGameMessage = "";
    let updatedMessageReason = "";
    playerSelectionDisplay.innerText = e.srcElement.innerText;

    // update emoji display logic
    if (computerSelection == 'ROCK'){
        computerSelectionDisplay.innerText = "✊";
    } else if (computerSelection == 'PAPER') {
        computerSelectionDisplay.innerText = "✋";
    } else {
        computerSelectionDisplay.innerText = "✌️";
    }



   
    // game logic 
    if (playerSelection.toUpperCase() === computerSelection) {
        updatedGameMessage = "Tie!";
        updatedMessageReason = ("You both picked " + playerSelection);
        
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        updatedGameMessage = "You Lose!";
        updatedMessageReason = "Paper beats Rock!";
        computerScore++;
        
        
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        updatedGameMessage = "You Win!";
        updatedMessageReason = "Rock beats Paper!";
        playerScore++;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        
        updatedGameMessage = "You Lose!";
        updatedMessageReason = "Rock beats Scissors!";
        computerScore++;
        
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        updatedGameMessage = "You Win!";
        updatedMessageReason = "Scissors beats Paper!";
        playerScore++;
        
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        updatedGameMessage = "You Win!";
        updatedMessageReason = "Paper beats Rock!";
        playerScore++;
        
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        updatedGameMessage = "You Lose!";
        updatedMessageReason = "Scissors beats Paper!";  
        computerScore++;
    }

    gameMessage.innerText = updatedGameMessage;
    messageReason.innerText = updatedMessageReason;
    playerScoreDisplay.innerText = "You: " + playerScore;
    computerScoreDisplay.innerText = "Computer: " + computerScore;
    

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
let playerScore = 0;
let computerScore = 0;
console.log (playerScore);
console.log (computerScore);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener("click", playRound));
