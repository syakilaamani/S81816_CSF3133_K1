// Global variables to track game state and scores
var gameStarted = false;
var wins = 0;
var losses = 0;
var draws = 0;
var roundCount = 0;
var results = new Array();

// Validate name and start the game
function startGame() {
    var name = document.getElementById("playerName").value;

    if (name == "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;
    document.getElementById("welcomeMsg").innerHTML = "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML = "Game started on: " + new Date();
}

// Randomly pick rock, paper, or scissors for the computer
function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Play one round against the computer
function playRound(playerChoice) {
    if (gameStarted == false) {
        alert("Click Start Game first.");
        return;
    }

    var computerChoice = getComputerChoice();
    roundCount++;

    // Update images based on choices
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    var outcome = "";
    var resultElement = document.getElementById("result");

    // Determine win, lose, or draw
    if (playerChoice == computerChoice) {
        outcome = "Draw";
        draws++;
        resultElement.style.color = "grey";
        resultElement.innerHTML = "It's a Draw!";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
    ) {
        outcome = "Win";
        wins++;
        resultElement.style.color = "green";
        resultElement.innerHTML = "You Win!";
    } else {
        outcome = "Lose";
        losses++;
        resultElement.style.color = "red";
        resultElement.innerHTML = "You Lose!";
    }

    // Update scoreboard and history array
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;
    results.push(outcome);

    // Add new row to the history table
    var table = document.getElementById("history");
    table.innerHTML += "<tr><td>" + roundCount + "</td><td>" + playerChoice + "</td><td>" + computerChoice + "</td><td>" + outcome + "</td></tr>";
}

// Count wins using a for loop and display win percentage
function showSummary() {
    if (results.length == 0) {
        document.getElementById("summary").innerHTML = "No rounds played yet.";
        return;
    }

    var totalWins = 0;
    for (var i = 0; i < results.length; i++) {
        if (results[i] == "Win") {
            totalWins++;
        }
    }

    var percentage = Math.round((totalWins / results.length) * 100);
    document.getElementById("summary").innerHTML = "You played " + results.length + " rounds and won " + percentage + "%";
}

// Reset all scores, arrays, and table rows back to initial state
function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    roundCount = 0;
    results = new Array();

    document.getElementById("wins").innerHTML = "0";
    document.getElementById("losses").innerHTML = "0";
    document.getElementById("draws").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";

    document.getElementById("history").innerHTML = "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";
}