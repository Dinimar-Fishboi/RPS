

//When user enters the screen, they should be asked 'R, P, or S'
// the input will become var userAnswer
// now I THINK that the (userAnswer) will be given an integer of 1.

var userAnswer = window.prompt("Hi! Want to play?", "R, S or P?",)

console.log(userAnswer);

// The below PURELY looks at the compAnswer

var possibleAnswers = ["S", "P", "R"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var randomIndex = getRandomInt(3);

 var compAnswer = possibleAnswers[randomIndex];

 console.log(compAnswer);

// Below is a HORRIBLE Boolean that works.
// Detailing the 7 possible outcomes.

if ( compAnswer === userAnswer) {
    console.log("You have tied!")
} else if ((compAnswer==="P") && (userAnswer=== "R")) {
    console.log("You Lost!")
} else if ((compAnswer==="S") && (userAnswer=== "R")) {
    console.log("You Won!")
} else if ((compAnswer==="S") && (userAnswer=== "P")) {
    console.log("You Lost!")
} else if ((compAnswer==="R") && (userAnswer=== "P")) {
    console.log("You Won!")
} else if ((compAnswer==="R") && (userAnswer=== "S")) {
    console.log("You Lost!")
} else if ((compAnswer==="P") && (userAnswer=== "S")) {
    console.log("You Won!")
}


if ( compAnswer === userAnswer) {
    window.alert("You have tied!")
} else if ((compAnswer==="P") && (userAnswer=== "R")) {
    window.alert("You Lost!")
} else if ((compAnswer==="S") && (userAnswer=== "R")) {
    window.alert()("You Won!")
} else if ((compAnswer==="S") && (userAnswer=== "P")) {
    window.alert("You Lost!")
} else if ((compAnswer==="R") && (userAnswer=== "P")) {
    window.alert("You Won!")
} else if ((compAnswer==="R") && (userAnswer=== "S")) {
    window.alert("You Lost!")
} else if ((compAnswer==="P") && (userAnswer=== "S")) {
    window.alert("You Won!")
}


function newFunction() {
    return console.log;
}
// var userPrompt = {
//    userInput: ["R","P","S"],
// }

// function game () {
//     var ABC = 1;
//     var choice = window.prompt("Let's Play");
//         switch (choice) {
//             case "R":
//                 console.log("You chose Rock");
//                 var R = 1;
//                 var P = 2;
//                 var S = 0;
//                 var comp= [s, r, p]
//                 break;
//             case "P":
//                 console.log("You chose Paper");
//                 var R = 0;
//                 var P = 1;
//                 var S = 2;
//                 break;
//             case "S":
//                 console.log("You chose Scissors");
//                 var R = 2;
//                 var P = 0;
//                 var S = 1;
//             default: 
//             console.log("Oh, so you don't want to play?")
//                 break;
//         }
// }

// game ();

// //When the user enters 'R', 'P', or 'S' - that should be given a value
// // Whatever user enters, value is assigned value '1'
// // HOWEVER if user enters R, R=1, P=2, S=0.
// // HOWEVER if user enters S, R=2, P=0, S=1.
// // HOWEVER if user enters P, R=0, P=1, S=2.

// function compTurn() {

// }

// //The computer should randomly choose either 'R', 'P', or 'S'

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   // !!!!!!!!!! The above function randomly generates a number,
//   // the below command prints that function.
  
//  var x = getRandomInt(5);
//  console.log(x);

//   console.log(getRandomInt(3));
//  window.alert((getRandomInt(3)));



// // If both the User and the Computer choose the same value, it's a tie.



// // R > S, S > P, P > R, The computer should choose a variable and a specific
// // result should come up based on the user input and the computer input.

// // The amount of Losses, Wins and Ties should be displayed to the user
// // after the round. The stats will show up with an 'ok' button.

// // The user will be asked if they want to 'Play Again'

// // If they select 'OK' they return to the start. If they select 'Cancel'
// // The alert box will 

// //What are the possible inputs from user?


//-------------------

// var possibleAnswers = ["R", "P", "S"]



// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   var randomIndex = getRandomInt(3);

//  var compAnswer = possibleAnswers[randomIndex];

//  console.log(compAnswer);
