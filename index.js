

//When user enters the screen, they should be asked 'R, P, or S'
// the input will become var userAnswer
// now I THINK that the (userAnswer) will be given an integer of 1.



// The below PURELY looks at the compAnswer
// var possibleAnswers = ["S", "P", "R"] 

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   } 

//   var randomIndex = getRandomInt(3); 

//  var compAnswer = possibleAnswers[randomIndex]; 

//  console.log(compAnswer);

// Below is a HORRIBLE Boolean that works.
// Detailing the 7 possible outcomes.

// if ( compAnswer === userAnswer) {
//     console.log("You have tied!")
// } else if ((compAnswer==="P") && (userAnswer=== "R")) {
//     console.log("You Lost!"),
//     console.log("Oh and this message prints")
// } else if ((compAnswer==="S") && (userAnswer=== "R")) {
//     console.log("You Won!"),
//     console.log("Oh and this message prints")
// } else if ((compAnswer==="S") && (userAnswer=== "P")) {
//     console.log("You Lost!")
// } else if ((compAnswer==="R") && (userAnswer=== "P")) {
//     console.log("You Won!")
// } else if ((compAnswer==="R") && (userAnswer=== "S")) {
//     console.log("You Lost!")
// } else if ((compAnswer==="P") && (userAnswer=== "S")) {
//     console.log("You Won!")
// }





 // window.prompt('you have won x amoiun')
//  var gameTotal = {
//     Wins: 0,
//     Loses: 0,
//     Ties: 0,
// }

// var possibleAnswers = ["S", "P", "R"] // This array means that possibleAnswers[0] = "S"

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   } // This function ensures a randome number between and including 0 up to 'max'-1
//   // is returned.

//   var randomIndex = getRandomInt(3); // randomIndex will equal either 0, 1, or 2.
//   // aka, randomIndex will equal S, P or R respectively. This is the same output as the
//   // array, ergo the below is true.

//  var compAnswer = possibleAnswers[randomIndex]; 

//  console.log(compAnswer);


// function playGame() {
   
//     var userAnswer = window.prompt("Hi! Want to play?", "R, S or P?",);
//     var possibleAnswers = ["S", "P", "R"] 
    
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//      } 

//      var randomIndex = getRandomInt(3); 

//     var compAnswer = possibleAnswers[randomIndex]; 

//     console.log(compAnswer);
//     console.log(userAnswer);
       
//          if ( compAnswer === userAnswer) {
//             window.alert("The computer chose " + compAnswer + " You have tied!");
//             console.log("You have tied!");
//             gameTotal.Ties += 1
//         } else if ((compAnswer==="P") && (userAnswer=== "R")) {
//             window.alert("The computer chose " + compAnswer + ", You Lost!");
//             console.log("You Lost!");
//             gameTotal.Loses = gameTotal.Loses +1;
//         } else if ((compAnswer==="S") && (userAnswer=== "R")) {
//             window.alert("The computer chose " + compAnswer + ", You Won!");
//             console.log("You Won!");
//             gameTotal.Wins = gameTotal.Wins +1;
//         } else if ((compAnswer==="S") && (userAnswer=== "P")) {
//             window.alert("The computer chose " + compAnswer + ", You Lost!");
//             console.log("You Lost!");
//             gameTotal.Loses = gameTotal.Loses +1;
//         } else if ((compAnswer==="R") && (userAnswer=== "P")) {
//             window.alert("The computer chose " + compAnswer + ", You Won!");
//             console.log("You Won!");
//             gameTotal.Wins = gameTotal.Wins +1;
//         } else if ((compAnswer==="R") && (userAnswer=== "S")) {
//             window.alert("The computer chose " + compAnswer + ", You Lost!");
//             console.log("You Lost!");
//             gameTotal.Loses = gameTotal.Loses +1;
//         } else if ((compAnswer==="P") && (userAnswer=== "S")) {
//             window.alert("The computer chose " + compAnswer + ", You Won!");
//             console.log("You Won!");
//             gameTotal.Wins = gameTotal.Wins +1;
//         }
//         console.log(gameTotal)
//         window.alert("Losses: " + gameTotal.Loses + " Wins: " + gameTotal.Wins + " Ties: " + gameTotal.Ties)
//     }

var gameTotal = {
    Wins: 0,
    Loses: 0,
    Ties: 0,
}



function playGame() {
   
    var userAnswer = window.prompt("Hi! Want to play Rock, Paper, Scissors?", "R, S or P?",);
    var possibleAnswers = ["S", "P", "R"] 
    userAnswer = userAnswer.toUpperCase();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
     } 
    
        var randomIndex = getRandomInt(3); 
        var compAnswer = possibleAnswers[randomIndex]; 
    
    
        console.log(compAnswer);
        console.log(userAnswer);

        if (!userAnswer){
            return;}
        // } 
        //  if (userAnswer !== "R" || "P" || "S") {
        
        //     window.alert("That's not an answer");
        //     return;
        // } 
             if ( compAnswer === userAnswer) {
            window.alert("The computer chose " + compAnswer + " You have tied!");
            console.log("You have tied!");
            gameTotal.Ties += 1
        } else if (((compAnswer==="P") && (userAnswer=== "R")) || ((compAnswer==="S") && (userAnswer=== "P")) || ((compAnswer==="R") && (userAnswer=== "S"))) {
            window.alert("The computer chose " + compAnswer + ", You Lost!");
            console.log("You Lost!");
            gameTotal.Loses = gameTotal.Loses +1;
        } else if (((compAnswer==="S") && (userAnswer=== "R")) || ((compAnswer==="R") && (userAnswer=== "P")) || ((compAnswer==="P") && (userAnswer=== "S"))) {
            window.alert("The computer chose " + compAnswer + ", You Won!");
            console.log("You Won!");
            gameTotal.Wins = gameTotal.Wins +1;
        } else if (userAnswer !== "P","R","S") {
        console.log("that's not an answer") 
        window.alert("You know how to play right?")
    }
        console.log(gameTotal)
        window.alert("Losses: " + gameTotal.Loses + " Wins: " + gameTotal.Wins + " Ties: " + gameTotal.Ties)
   
        
    }




function startGame() {
 var gameFinished = false

while (!gameFinished) {
    // code block to be executed
    playGame();
     gameFinished = !window.confirm("Want to try again?")
    if (gameFinished) {
        window.alert("Okay, thanks for playing 🤜 ✋ ✌")
    }
  }
}
 
startGame();

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
