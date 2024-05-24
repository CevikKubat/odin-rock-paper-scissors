# Rock Paper Scissors

## Overview

1) Get user input
2) Create computerChoice via math.random
3) Create determineWinner(userInput, computerChoice)
   1) if userInput == computerChoice
      1) Return draw 
   2) elif userInput == scissors && computerChoice == paper
      1) return "userInput wins"
   3) elif userInput == rock && computerChoice == scissors
      1) return "userInput wins"
   4) elif userInput == paper && computerChoice == scissors
      1) return "userInput wins"
   5) else
      1) return computerWins 
