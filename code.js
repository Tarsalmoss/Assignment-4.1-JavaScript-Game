/*
    Function: playGame()

    This function simulates a game of Craps.
    It generates two random dice rolls,
    calculates the sum,
    determines if the player wins,
    loses, or pushes,
    and displays the results on the webpage.
*/
function playGame()
{
    // Generate random number between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;

    // Generate second random number between 1 and 6
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Add dice together
    let sum = die1 + die2;

    // Variable for result message
    let result;

    // Craps losing conditions
    if(sum === 7 || sum === 11)
    {
        result = "CRAPS - You Lose!";
    }

    // Winning condition
    else if(die1 === die2 && die1 % 2 === 0)
    {
        result = "You Won!";
    }

    // Push condition
    else
    {
        result = "You Pushed!";
    }

    // Display results on webpage
    document.getElementById("results").innerHTML =
        "<h2>Results</h2>" +
        "Die 1: " + die1 + "<br>" +
        "Die 2: " + die2 + "<br>" +
        "Sum: " + sum + "<br><br>" +
        "<strong>" + result + "</strong>";

    // Call second function and pass the sum
    displayLuck(sum);
}


/*
    Function: displayLuck(total)

    This function accepts a parameter.
    It receives the total of the dice rolls
    and displays a custom message.
*/
function displayLuck(total)
{
    // Variable to hold message
    let luckMessage;

    // Determine luck level
    if(total >= 10)
    {
        luckMessage = "🔥 High Roll! Lady Luck is with you!";
    }
    else if(total >= 6)
    {
        luckMessage = "🍀 Decent Roll!";
    }
    else
    {
        luckMessage = "😬 Better luck next time!";
    }

    // Output message to webpage
    document.getElementById("message").textContent = luckMessage;
}
