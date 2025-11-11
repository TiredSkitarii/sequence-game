let game = {
    score: 0,
    currentTurn: [],
    playerTurn: [],
    turnNumber: 0,
    choices: ["triangle", "square", "circle", "diamond"],
    freezePlayer: false,
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
    gameTurn();
    // commented out until function complete
}

function gameTurn() {
    game.freezePlayer = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        flashShape(game.currentTurn[game.turnNumber]);
        game.turnNumber++
        if (game.turnNumber >= game.currentTurn.length) {
            clearInterval(turns);
            game.freezePlayer = false;
        }
    }, 750);
}

function flashShape(shapeID) {
    if (shapeID === "triangle") {
        document.getElementById(shapeID).classList.remove("inactiveTri");
        setTimeout (() => {
            document.getElementById(shapeID).classList.add("inactiveTri");
        }, 750);
    } else {
        document.getElementById(shapeID).classList.remove("inactive");
        setTimeout (() => {
            document.getElementById(shapeID).classList.add("inactive");
        }, 750);
    }
}