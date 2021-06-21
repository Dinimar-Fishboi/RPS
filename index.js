


//When user enters the screen, they should be asked 'R, P, or S'

window.prompt("Hi! R, P or S?")

var userPrompt = {
    userInput: ["R","P","S"],
}

//When the user enters 'R', 'P', or 'S' - that should be given a value
// Whatever user enters, value is assigned value '1'
// HOWEVER if user enters R, R=1, P=2, S=0.
// HOWEVER if user enters S, R=2, P=0, S=1.
// HOWEVER if user enters P, R=0, P=1, S=2.

function compTurn() {

}

//The computer should randomly choose either 'R', 'P', or 'S'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // !!!!!!!!!! The above function randomly generates a number,
  // the below command prints that function.
  
 window.alert((getRandomInt(3)));


// If both the User and the Computer choose the same value, it's a tie.



// R > S, S > P, P > R, The computer should choose a variable and a specific
// result should come up based on the user input and the computer input.

// The amount of Losses, Wins and Ties should be displayed to the user
// after the round. The stats will show up with an 'ok' button.

// The user will be asked if they want to 'Play Again'

// If they select 'OK' they return to the start. If they select 'Cancel'
// The alert box will close.