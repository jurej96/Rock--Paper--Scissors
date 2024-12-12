let userScore = 0;
let computerScore = 0;
let draws = 0;

const choiceEmojis = {
    'rock': '✊',
    'paper': '✋',
    'scissors': '✌️'
};

// * Function for computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// * Function for outcome
function determineOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win this round!";
    } else {
        return "Computer wins this round!";
    }
}

// * Function to update score
function updateScores(outcome) {
    if (outcome === "You win this round!") {
        userScore++;
    } else if (outcome === "Computer wins this round!") {
        computerScore++;
    } else {
        draws++;
    }
    document.getElementById('scores').innerText = `You: ${userScore} | Computer: ${computerScore} | Draws: ${draws}`;
}

// * Function for user choice
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const computerEmoji = choiceEmojis[computerChoice];
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice} ${computerEmoji}`;
    const outcome = determineOutcome(userChoice, computerChoice);
    document.getElementById('outcome').innerText = outcome;
    updateScores(outcome);
}

// * Event listeners
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

// * Event listener for reset game
document.getElementById('reset-game').addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    draws = 0;
    document.getElementById('computer-choice').innerText = '';
    document.getElementById('outcome').innerText = '';
    document.getElementById('scores').innerText = `You: 0 | Computer: 0 | Draws: 0`;
});