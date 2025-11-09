let game = {
    score: 0,
    currentTurn: [],
    playerTurn: [],
    turnNumber: 0,
    choices: ["triangle", "square", "circle", "diamond"],
}

function newGame() {
    game.score = 0;
    game.playerTurn = [];
    game.currentTurn = [];
    game.turnNumber = 0;
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function addTurn() {
    game.playerMoves = [];
    game.currentTurn.push(game.choices[(Math.floor(Math.random() * 4))]);
    // gameTurn();
    // commented out until function complete
}

// function gameTurn() {}

function flashShape(shapeID) {
    if (shapeID === "triangle") {
        document.getElementById(shapeID).classList.remove("inactiveTri");
        setTimeout (() => {
            document.getElementById(shapeID).classList.add("inactiveTri");
        }, 500);
    } else {
        document.getElementById(shapeID).classList.remove("inactive");
        setTimeout (() => {
            document.getElementById(shapeID).classList.add("inactive");
        }, 750);
    }
}

// Reminder for flashShape function - will need to check id of shape as Triangle will need inactiveTri removed and readded instead of inactive