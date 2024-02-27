let runLoop = false,
    game = null;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");

function switchMenu(hideMenu, showMenu) {
    document.getElementsByClassName(hideMenu)[0].style.display = 'none';
    document.getElementsByClassName(showMenu)[0].style.display = 'flex';
}

function startGame() {
    if (game == null) {
        game = new Game(ctx);
        runLoop = true;
        game.gameLoop();
        game.spawnEnemys();
    }
}

function stopGame() {
    if (game !== null) {
        runLoop = false;
        game = null;
    }
}