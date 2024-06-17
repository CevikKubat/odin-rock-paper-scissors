function main(){
    let roundCount = 1;
    let userScore = 0;
    let computerScore = 0;
    let gameWinner = "";
    let rpsButtons = document.querySelector("#rpsButtons");
    let computerScoreDiv = document.querySelector("#computerScore");
    let userScoreDiv = document.querySelector("#userScore");
    let roundCountDiv = document.querySelector("#roundCount");
    let resultsContainer = document.querySelector("#results");
    rpsButtons.addEventListener("click", (event) =>{
        // Clear elements
        if (roundCount == 6){
            // Remove elements here
        }
        // Get computer input
        let computerChoice = getComputerInput();

        // Get user input
        let userChoice = event.target.id;

        // Determine & announce round winner
        let roundWinner = determineRoundWinner(userChoice, computerChoice);
        const roundWinnerDiv = document.createElement("p");
        roundWinnerDiv.textContent = `winner round ${roundCount}: ${roundWinner}`;
        resultsContainer.appendChild(roundWinnerDiv);

        // Update scores
        if (roundWinner == "user"){
            userScore++;
        }
        else if (roundWinner == "computer"){
            computerScore++;
        }
        // Update round
        roundCount++;

        if (userScore > computerScore){
            gameWinner = "user";
        }
        else if (computerScore > userScore){
            gameWinner = "computer";
        }
        else{
            gameWinner = "no one"
        }
        // Finish game & announce winner
        if (roundCount == 6){
            computerScore = 0;
            userScore = 0;
            roundCount = 0;
            const gameWinnerDiv = document.createElement("p");
            gameWinnerDiv.textContent = `${gameWinner} wins this game`;
            resultsContainer.appendChild(gameWinnerDiv);
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play again!"
            playAgainButton.addEventListener("click", e => {
                while (resultsContainer.firstChild){
                    resultsContainer.firstChild.remove();
                }
            })
            resultsContainer.appendChild(playAgainButton);
        }
    })
}

function getComputerInput(){
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0)
        {
            return "rock";
        }
    else if (computerChoice == 1)
        {
            return "paper";
        }
    else if (computerChoice == 2)
        {
            return "scissors";
        }
}

function determineRoundWinner(userChoice, computerChoice){
    if (userChoice == computerChoice){
        return "draw";
    }
    else if (userChoice == "rock" && computerChoice == "scissors"){
        return "user"
    }
    else if (userChoice == "paper" && computerChoice == "rock"){
        return "user"
    }
    else if (userChoice == "scissors" && computerChoice == "paper"){
        return "user"
    }
    else{
        return "computer"
    }
}

main();