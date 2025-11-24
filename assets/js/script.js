// Opject for all Game stats
let game = {
    score: 0,
    currentTurn: [],
    playerTurn: [],
    turnNumber: 0,
    choices: ["triangle", "square", "circle", "diamond"],
    freezePlayer: false,
    lastClick: "",
}

// Runs new game, resetting score and beggining the game sequence
function newGame() {
    document.getElementById("start-game-text").innerText = "Restart Game";
    game.score = 0;
    game.playerTurn = [];
    game.currentTurn = [];
    game.turnNumber = 0;
    for (let shape of document.getElementsByClassName("shape")) {
        if (shape.getAttribute("data-listener") !=="true") {
            shape.addEventListener("click", (e) => {
                if (game.currentTurn.length > 0 && !game.freezePlayer) {
                let move = e.target.getAttribute("id");
                game.lastClick = move;
                flashShape(move);
                game.playerTurn.push(move);
                playerTurn();
                }
            });
            shape.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

// replaces score text with game score
function showScore() {
    document.getElementById("score").innerText = game.score;
    if (game.score >= 10) {
        document.getElementById("score-total").innerText = "100";
    }
}

// clear player sequnce and adds 1 to current sequence
function addTurn() {
    game.playerTurn = [];
    game.currentTurn.push(game.choices[(Math.floor(Math.random() * 4))]);
    gameTurn();
}

// Displays the current sequence to the player
function gameTurn() {
    game.freezePlayer = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        flashShape(game.currentTurn[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentTurn.length) {
            clearInterval(turns);
            setTimeout(1000);
            game.freezePlayer = false;
            Swal.fire({
                toast: true,
                position: "top",
                text: "Your turn",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }, 1000);
}

// compares Player sequence to the game sequence and continues or ends the game accordingly
function playerTurn() {
    let i = game.playerTurn.length - 1;
    if (game.currentTurn[i] === game.playerTurn[i]) {
        if (game.currentTurn.length === game.playerTurn.length) {
            game.score++;
        showScore();
        Swal.fire({
            text: "Well done!",
            confirmButtonText: "Continue",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
            addTurn();
            }
        });
        }
    } else {
        Swal.fire({
            text: "Sorry, Wrong Move!",
            confirmButtonText: "Restart Game",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
        newGame();
            }
        });
    }
}

// causes shapes to change colour when selected
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