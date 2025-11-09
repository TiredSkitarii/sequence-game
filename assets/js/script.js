let game = {
    score: 0,
    currentTurn: [],
    playerTurn: [],
    turnNumber: 0,
    choices: ["triangle", "square", "circle", "cross"],
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