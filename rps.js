function getComputerChoice() {
    let possibleChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computersChoice;
}

function playRound(e) {
    const playerSelectionDisplay = document.querySelector('.playerChoice');
    const computerSelectionDisplay = document.querySelector('.computerChoice');
    
    const playerSelection = e.srcElement.id;
    const computerSelection = getComputerChoice();

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

    updateGameMessages (updatedGameMessage, updatedMessageReason);
    updateScores (playerScore, computerScore);
    
    return;
}

function updateGameMessages (updatedGameMessage, updatedMessageReason) {
    
    const gameMessage = document.querySelector('.gameMessage');
    const messageReason = document.querySelector('.messageReason');
    gameMessage.innerText = updatedGameMessage;
    messageReason.innerText = updatedMessageReason;
}

function updateScores (updatedPlayerScore, updatedComputerScore) {
    playerScore = updatedPlayerScore;
    computerScore = updatedComputerScore;

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var gameOverMessageBox = document.getElementById("gameOverText");
    const playerScoreDisplay = document.querySelector('.playerScore');
    const computerScoreDisplay = document.querySelector('.computerScore');

    playerScoreDisplay.innerText = "You: " + updatedPlayerScore;
    computerScoreDisplay.innerText = "CPU: " + updatedComputerScore;

    if (playerScore == 5) {
        gameOverMessageBox.innerText = "You won! You beat the computer to getting 5 wins.";
        modal.style.display = "block";
        
    
    } else if (computerScore == 5){
        gameOverMessageBox.innerText = "You Lost! The Computer got to 5 wins first.";
        modal.style.display = "block";
    }
    
    span.onclick = function() {
        const playerSelectionDisplay = document.querySelector('.playerChoice');
        const computerSelectionDisplay = document.querySelector('.computerChoice');
        modal.style.display = "none";
        updateScores (0, 0);
        updateGameMessages ("Play rock paper scissors against the computer!", "Select your choice");
        playerSelectionDisplay.innerText = "❓";
        computerSelectionDisplay.innerText = "❓";
    }

}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener("click", playRound));
