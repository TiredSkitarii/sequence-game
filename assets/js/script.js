let game = {
    score: 12,
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
    for (let shape of document.getElementsByClassName("shape")) {
        if (shape.getAttribute("data-listener") !=="true") {
            shape.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                flashShape(move);
                game.playerTurn.push(move);
            });
            shape.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function addTurn() {
    game.playerTurn = [];
    game.currentTurn.push(game.choices[(Math.floor(Math.random() * 4))]);
    gameTurn();
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

// Event Listeners for buttons
let newGameButton = document.getElementById("start-game");
newGameButton.addEventListener("click", newGame);