let gamepadConnected = null;

window.addEventListener('gamepadconnected', (event) => {
    if (gamepadConnected == null) {
        gamepadConnected = event.gamepad.index;
    }
});

window.addEventListener('gamepaddisconnected', (event) => {
    if (event.gamepad.index == gamepadConnected) {
        gamepadConnected = null;
    }
});

function gameLoop() {
    
    checkButtonPressed();

    requestAnimationFrame(gameLoop);
}

function checkButtonPressed() {
    const gamepad = window.gamepads
}

gameLoop();