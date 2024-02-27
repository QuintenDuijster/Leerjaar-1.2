class Inputs {
    constructor() {
        this.buttonWaiting = null;

        this.inputs = {
            firstLeft: 'a',
            secondLeft: 'j',
            firstRight: 'd',
            secondRight: 'l',
            firstShoot: 'm',
            secondShoot: 0
        }
        this.inputsPressed = {
            left: false,
            right: false
        }

        this.gamepadInputs = {
            firstLeft: 'axes[0] left',
            secondLeft: 'axes[2] left',
            firstRight: 'axes[0] right',
            secondRight: 'axes[2] right',
            firstShoot: 'button[0]',
            secondShoot: 'button[12]'
        }

        this.gamepadConnected = null;

        document.addEventListener('keydown', (event) => {
            if (event.key == this.inputs.firstLeft || event.key == this.inputs.secondLeft) {
                this.inputsPressed.left = true;
            }
            if (event.key == this.inputs.firstRight || event.key == this.inputs.secondRight) {
                this.inputsPressed.right = true;
            }
            if (event.key == this.inputs.firstShoot || event.key == this.inputLoop.secondShoot) {
                if (game != null) {
                    game.addBullet();
                }
            }

            this.changeShowInputs(true);
            if (this.buttonWaiting != null) {
                this.changeInput(event.key);
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.key == this.inputs.firstLeft || event.key == this.inputs.secondLeft) {
                this.inputsPressed.left = false;
            }
            if (event.key == this.inputs.firstRight || event.key == this.inputs.secondRight) {
                this.inputsPressed.right = false;
            }
        });

        document.addEventListener('mousedown', (event) => {
            if (event.key == this.inputs.firstLeft || event.key == this.inputs.secondLeft) {
                this.inputsPressed.left = true;
            }
            if (event.key == this.inputs.firstRight || event.key == this.inputs.secondRight) {
                this.inputsPressed.right = true;
            }
            if (event.key == this.inputs.firstShoot || event.key == this.inputLoop.secondShoot) {
                if (game != null) {
                    game.addBullet();
                }
            }

            this.changeShowInputs(true);
            if (this.buttonWaiting != null) {
                this.changeInput(event.button);
            }
        });

        document.addEventListener('mouseup', (event) => {
            if (event.key == this.inputs.firstLeft || event.key == this.inputs.secondLeft) {
                this.inputsPressed.left = false;
            }
            if (event.key == this.inputs.firstRight || event.key == this.inputs.secondRight) {
                this.inputsPressed.right = false;
            }
        });

        window, addEventListener('gamepadconnected', (event) => {
            if (this.gamepadConnected == null) {
                this.gamepadConnected = event.gamepad.index;
            }
        });

        window, addEventListener('gamepaddisconnected', (event) => {
            if (event.gamepad.index == this.gamepadConnected) {
                this.gamepadConnected = null;
            }
        });
    }

    inputLoop = () => {
        if (this.gamepadConnected != null) {
            this.checkControllerInput();
        }

        requestAnimationFrame(this.inputLoop);
    }

    changeShowInputs(keyboardUsed) {
        if (keyboardUsed) {
            document.getElementsByClassName('firstLeft')[0].textContent = this.inputs.firstLeft;
            document.getElementsByClassName('secondLeft')[0].textContent = this.inputs.secondLeft;
            document.getElementsByClassName('firstRight')[0].textContent = this.inputs.firstRight;
            document.getElementsByClassName('secondRight')[0].textContent = this.inputs.secondRight;
            document.getElementsByClassName('firstShoot')[0].textContent = this.inputs.firstShoot;
            document.getElementsByClassName('secondShoot')[0].textContent = this.inputs.secondShoot;
        } else {
            document.getElementsByClassName('firstLeft')[0].textContent = this.gamepadInputs.firstLeft;
            document.getElementsByClassName('secondLeft')[0].textContent = this.gamepadInputs.secondLeft;
            document.getElementsByClassName('firstRight')[0].textContent = this.gamepadInputs.firstRight;
            document.getElementsByClassName('secondRight')[0].textContent = this.gamepadInputs.secondRight;
            document.getElementsByClassName('firstShoot')[0].textContent = this.gamepadInputs.firstShoot;
            document.getElementsByClassName('secondShoot')[0].textContent = this.gamepadInputs.secondShoot;
        }
    }

    checkControllerInput() {
        const gamepad = navigator.getGamepads()[0];

        for (let i = 0; i < gamepad.buttons.length; i++) {
            if (gamepad.buttons[i].pressed) {
                this.changeShowInputs(false);

                if (this.buttonWaiting != null) {

                }
            }
        }

        for (let i = 0; i < gamepad.axes.length; i++) {
            if (gamepad.axes[i] == 1 || gamepad.axes[i] == -1) {
                this.changeShowInputs(false);

                if (this.buttonWaiting != null) {

                }
            }
        }

    }

    requestChangeInput(button) {
        if (this.buttonWaiting == null) {
            this.buttonWaiting = button;
            document.getElementsByClassName(button)[0].textContent = 'press something!';
            return;
        } else {
            document.getElementsByClassName(this.buttonWaiting)[0].textContent = this.inputs[this.buttonWaiting];
            this.buttonWaiting = button;
            document.getElementsByClassName(button)[0].textContent = 'press something!';
            return;
        }
    }

    changeInput(checkKey) {
        const inputsToCheck = Object.values(this.inputs)
        inputsToCheck.splice(inputsToCheck.indexOf(this.inputs[this.buttonWaiting]), 1);

        if (inputsToCheck.includes(checkKey)) {
            alert('this key is already in use');
        } else {
            document.getElementsByClassName(this.buttonWaiting)[0].textContent = this.printName(checkKey);
            this.inputs[this.buttonWaiting] = this.printName(checkKey);
            this.buttonWaiting = null;
        }
    }

    printName(item) {
        switch (item) {
            case 0: return 'Left mouse';
                break
            case 1: return 'Middle mouse';
                break
            case 2: return 'Right mouse';
                break
        }
        return item;
    }
}

const inputs = new Inputs();
inputs.inputLoop();