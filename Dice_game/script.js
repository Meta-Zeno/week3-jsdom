let score = 0;

document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const diceImageElement = document.getElementById("diceImage");
    diceImageElement.src = `images/dice${diceValue}.png`;
    diceImageElement.alt = `Dice: ${diceValue}`;

    if (diceValue === 1) {
        score = 0;
        document.getElementById("result").innerText = "You lost! Click 'Roll the Dice' to play again.";
    } else {
        score += diceValue;
        if (score >= 20) {
            document.getElementById("result").innerText = "You won! Click 'Roll the Dice' to play again.";
            score = 0;
        } else {
            document.getElementById("result").innerText = `Current Score: ${score}`;
        }
    }
}














