let playerScore = 0;
let computerScore = 0;
let draws = 0;
let winner;

const buttons = document.querySelectorAll('button');

const pScore = document.querySelector('.playerScore');
pScore.textContent = `Player Score: ${playerScore}`;

const cScore = document.querySelector('.computerScore');
cScore.textContent = `Computer Score: ${computerScore}`;

const dScore = document.querySelector('.numberOfDraws');
dScore.textContent = `Draws: ${draws}`;

const pChose = document.querySelector('.playerChose');
const cChose = document.querySelector('.computerChose');
const wins = document.querySelector('.winnerDisplay');


function computerPlay() {
    /* computer picks a random number between 0 and 2 to select a value from the array of choices */
    let choices = ["rock", "paper", "scissors"];
    let chosenValue = Math.floor(Math.random() * 3);
    return choices[chosenValue];
}
    
function playRound(playerSelection) {

    let computerSelection = computerPlay();

    function displayResults() {
        pChose.textContent = `The Player chose ${playerSelection}.`
        cChose.textContent = `The Computer chose ${computerSelection}.`
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        dScore.textContent = `Draws: ${draws}`;
    }

    if (playerSelection === computerSelection) {
        console.log("Draw!")
        draws += 1
        displayResults()
    }

    else if (
        playerSelection === "rock"  && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
            console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
            playerScore += 1
            displayResults()

            if (playerScore === 5) {
                wins.textContent = `You win! Pick an option to play again.`
                playerScore = 0;
                computerScore = 0
                draws = 0;
                return
            }
    }
    
    else {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
            computerScore += 1
            displayResults()

            if (computerScore === 5) {
                wins.textContent = `The winner is the computer! Pick an option to play again.`
                playerScore = 0;
                computerScore = 0;
                draws = 0;
                return
            }
    }

}

buttons.forEach(button => {
    button.addEventListener('click', () => {playRound(button.id)})
});

