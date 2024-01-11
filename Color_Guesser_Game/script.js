// All of the variables that hold the HTML Elements
// The allBoxes variable holds an array of all elements with a class of box
const colorToGuess = document.getElementById("colorToGuess");
const newColBtn = document.getElementById("newColBtn");
const isCorrectMsg = document.getElementById("isCorrectMsg");
const score = document.getElementById("score");
const allBoxes = document.querySelectorAll(".box");

// newColor holds the rgb value of one of the six boxes (chosen at random) that you need to guess
// displayScore holds the current score and increase by 1 when you guess the correct color
// guessing holds a true or false value that stops any clicks from getting tracked if you have already guessed the color correctly so you can't increase the score after alreadt guessing correctly
let newColor = null;
let displayScore = 0;
let guessing = false;

// the forEach method goes through the array of allBoxes and gives each one a click event listener
allBoxes.forEach((colorBox) => {
    // colorBox just represents the value of the current element (one div at a time)
    colorBox.addEventListener("click", () => {
        // first check if the guessing variable is true
        // if it is then the user hasnt gotten the correct color yet so run the code inside the if statement
        if(guessing){
            // check if the correct color is the same as the boxes background color that you clicked on
            if(colorBox.style.backgroundColor === newColor){
                // if the user guessed correctly then run the correct function
                correct()
            } else {
                // if wrong then set the box they clicked to transparent so the user can't see it
                colorBox.style.opacity = "0"
            }
        }
    
    })

})

// the correct function handles if the player guesses correctly
const correct = () => {
    // set the guessing to false so they can't keep clicking the boxes and increasing the score after guessing correctly
    guessing = false
    // increase the score, display the score and display a correct message
    displayScore++
    score.textContent = displayScore
    isCorrectMsg.textContent = "Correct!"

    // loop through the array of allBoxes to change the color of all of them to the correct value and make them all opaque again
    for(let i = 0; i < allBoxes.length; i++){
        allBoxes[i].style.opacity = "1"
        allBoxes[i].style.backgroundColor = newColor
    }

} 


// this function handles the resetting/random generating of the colors
const resetGame = () => {
    // set guessing to true so the color check can be made on click of each of the 6 boxes
    guessing = true;
    
    // loop through the boxes and generate a random rgb value for each box
    for(let i = 0; i < allBoxes.length; i++){
        // a random number is generated between 0 - 255 and used 3 times for each value: red, green, blue
        allBoxes[i].style.opacity = "1"
        allBoxes[i].style.backgroundColor = `rgb(${Math.round( Math.random() * 255 )}, ${Math.round( Math.random() * 255 )}, ${Math.round( Math.random() * 255 )})`
    }
    // randomly pick one of the six boxes to be the answer and store that randomly picked element in a variable called elementToGuess
    let elementToGuess =  allBoxes[ Math.floor(Math.random() * allBoxes.length) ];

    // store the elementToGuess' background color in the newColor variable so it can be accessed in other functions
    newColor = elementToGuess.style.backgroundColor;

    // display the color rgb value that needs to be guessed to the player in the h2 tag
    colorToGuess.textContent = newColor

    // reset the win message to an empty string
    isCorrectMsg.textContent = ""
}

// run the function once when the file first loads
resetGame()

// run the resetGame function when the new game button is clicked
newColBtn.addEventListener("click", resetGame)