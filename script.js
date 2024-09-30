// Variables to track scores
let playerScore = 0;
let computerScore = 0;

// Get elements from the DOM
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('reset');

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

// Reset button functionality
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = 'Make your move!';
    scoreDisplay.textContent = 'Player: 0 | Computer: 0';
});