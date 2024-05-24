function main(){
    let userChoice = userInput();
    let computerChoice = computerInput();
    console.log(determineWinner(userChoice, computerChoice));
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
}

main();