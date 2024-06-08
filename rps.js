function main(){
    var userScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++){
        let userChoice = userInput();
        let computerChoice = computerInput();
        console.log(`Round ${i + 1}: ${determineWinner(userChoice, computerChoice)}`);
        if (determineWinner(userChoice, computerChoice) == "user wins"){
            userScore++;
        }
        else if (determineWinner(userChoice, computerChoice) == "computer wins"){
            computerScore++;
        }
    }
    if (userScore > computerScore){
        console.log("The user wins this battle. Refresh page to play again.")
    }
    else if (computerScore > userScore){
        console.log("The computer wins this battle. Refresh page to play again.")
    }
}

function userInput(){
    let userChoice = prompt("Rock, paper, scissors time! Type 'r', 'p' or 's'");
    return userChoice;
}

function computerInput(){
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0)
        {
            return "r";
        }
    else if (computerChoice == 1)
        {
            return "p";
        }
    else if (computerChoice == 2)
        {
            return "s";
        }
}

function determineWinner(userChoice, computerChoice){
    if (userChoice == computerChoice){
        return "draw";
    }
    else if (userChoice == "r" && computerChoice == "s"){
        return "user wins"
    }
    else if (userChoice == "p" && computerChoice == "r"){
        return "user wins"
    }
    else if (userChoice == "s" && computerChoice == "p"){
        return "user wins"
    }
    else{
        return "computer wins"
    }
}

main();