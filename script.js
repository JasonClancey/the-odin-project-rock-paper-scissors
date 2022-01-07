function game() {

function computerPlay() {
    /* computer picks a random number between 0 and 2 to select a value from the array of choices */
    let choices = ["rock", "paper", "scissors"];
    let chosenValue = Math.floor(Math.random() * (2-0+1) + 0);
    let computerChoice = choices[chosenValue];
    return computerChoice

}

let playerScore = 0;
let computerScore = 0;


const computerSelection = computerPlay();
const playerChoice = prompt("Please pick either rock, paper or scissors.", "");
const playerSelection = playerChoice.toLowerCase();

function playRound(playerSelection, computerSelection) {

    console.log(`Computer choice:  ${computerSelection}`);
    console.log(`Player choice:  ${playerSelection}`);


    if (playerSelection === computerSelection) {
        console.log("Draw!")
    }

    if (
        playerSelection === "rock"  && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
            console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
            ++playerScore;
    }
    
    if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
    ) {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
            ++computerScore;
    }

}

playRound(playerSelection, computerSelection);

}


