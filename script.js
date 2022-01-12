let playerScore = 0;
let computerScore = 0;
let winner = '';
let draws = 0;

function computerPlay() {
    /* computer picks a random number between 0 and 2 to select a value from the array of choices */
    let choices = ["rock", "paper", "scissors"];
    let chosenValue = Math.floor(Math.random() * 3);
    let computerChoice = choices[chosenValue];
    return computerChoice
}

function getUpdatedScore() {
    if (winner === "player") {
        ++playerScore
    }
    else if (winner === "computer") {
        ++computerScore
    } 
    else if (winner === "draw")
        ++draws
    console.log(`Scores:
                Computer ${computerScore}
                Player: ${playerScore}
                Draws: ${draws}`)


}

function game() {

while (playerScore !== 5 || computerScore !== 5) {

const playerChoice = prompt("Please pick either rock, paper or scissors.", "");
const playerSelection = playerChoice.toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    console.log(`Computer choice:  ${computerSelection}`);
    console.log(`Player choice:  ${playerSelection}`);


    if (playerSelection === computerSelection) {
        console.log("Draw!")
        winner = 'draw'
    }

    if (
        playerSelection === "rock"  && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
            console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
            winner = "player"
    }
    
    if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
    ) {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
            winner = "computer"
    }


}

playRound(computerSelection, playerSelection)
getUpdatedScore()

if (playerScore === 5) {
    console.log("The player wins!")
    break
}

else if (computerScore === 5) {
    console.log("The computer wins!")
    break
} 

}

}