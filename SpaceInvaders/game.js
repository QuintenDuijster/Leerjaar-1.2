//player character blueprint
class playerCharacter
{
    constructor(img, x, y, speed, lives)
    {
        this.playerImg = img;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.lives = lives;
    }

    //move player x to the left if inputpressed is true and player is not of the screen
    moveLeft = () =>
    { 
        if (inputs.inputsPressed.left && this.x > 0)
            this.x = this.x - this.speed * cal.deltaTime;
    }

    //move player x to the right if inputpressed is true and player is not of the screen
    moveRight = () =>
    {
        if (inputs.inputsPressed.right && this.x < canvas.width - 40)
            this.x = this.x + this.speed * cal.deltaTime;
    }

    load = (ctx) =>
    {
        this.moveLeft();
        this.moveRight();

        ctx.drawImage(this.playerImg, this.x, this.y);
    }
}

//enemycharacter blueprint
class enemyCharacter
{
    constructor(img, x, y)
    {
        this.enemyImg = img;
        this.x = x;
        this.y = y;
    }

    load = (ctx) =>
    {
        ctx.drawImage(this.enemyImg, this.x, this.y);
    }
}

//bulletEntity blueprint
class bulletEntity
{
    constructor(img, x, y, speed)
    {
        this.bulletImg = img;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    moveUp = () =>
    {
        this.y = this.y - this.speed * cal.deltaTime;
    }

    load = (ctx) =>
    {
        this.moveUp();
        ctx.drawImage(this.bulletImg, this.x, this.y);
    }
}

//bombEntity blueprint
class bombEntity
{
    constructor(img, x, y, speed)
    {
        this.bulletImg = img;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    moveDown = () =>
    {
        this.y = this.y + this.speed * cal.deltaTime;
    }

    load = (ctx) =>
    {
        this.moveDown();
        ctx.drawImage(this.bulletImg, this.x, this.y);
    }
}

//main game code
class Game
{
    constructor(ctx)
    {
        this.ctx = ctx;

        this.player = new playerCharacter(document.getElementsByClassName('playerImg')[0], 410, canvas.height - 100, 250, 3);

        this.bullets = [];
        this.timeToShoot = true;

        this.enemys = [[[], []], [[], []], [[], []]];
        this.enemySpeed = 200;
        this.bombs = [];
    }

    gameLoop = () => 
    {
        this.ctx.drawImage(document.getElementsByClassName('backgroundImg')[0], 0, 0);

        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Arial';
        this.ctx.fillText('lives: ' + this.player.lives, 10, canvas.height - 40);

        this.addBomb();

        this.player.load(this.ctx);

        //loads every bullet
        for (let i = 0; i < this.bullets.length; i++)
        { 
            this.bullets[i].load(this.ctx);
        }

        //loads every bomb
        for (let i = 0; i < this.bombs.length; i++)
        { 
            this.bombs[i].load(this.ctx);
        }

        this.collision();

        //if enemy row is not 0 move that row of enemys
        if (this.enemys[0][1].length > 0)
        {
            this.moveEnemys(0);
        }
        if (this.enemys[1][1].length > 0)
        {
            this.moveEnemys(1);
        }
        if (this.enemys[2][1].length > 0)
        {
            this.moveEnemys(2);
        }

        //loads all the enemys
        for (let j = 0; j < this.enemys.length; j++) { 
            for (let i = 0; i < this.enemys[j][1].length; i++) {
                this.enemys[j][1][i].load(this.ctx);
            }
        }

        //checks if player has more then 0 lives if not stop the game
        if (this.player.lives <= 0)
        {
            stopGame();
            switchMenu('game', 'lost');
        }
        //checks if there are any enemys left if not stop the game
        else if (this.enemys[0][1].length < 0 && this.enemys[1][1].length < 0 && this.enemys[2][1].length < 0)
        {
            stopGame();
            switchMenu('game', 'won');
        }

        if (runLoop) {
            requestAnimationFrame(this.gameLoop);
        }
    }

    addBullet = () => 
    {
        if (this.timeToShoot) 
        {
            this.bullets.push(new bulletEntity(document.getElementsByClassName('bulletImg')[0], this.player.x, this.player.y, 300));
            this.shootTime = cal.time;

            //couldown for shooting a bullet duration 1000ms
            this.timeToShoot = false;
            setTimeout(() => 
            {
                this.timeToShoot = true;
            }, 1000);
        }
    }

    addBomb = () =>
    {
        //goes through every enemy
        for (let i = 0; i < this.enemys.length; i++) 
        {
            for (let j = 0; j < this.enemys[i][1].length; j++) 
            {
                //add a bomb at enemy location if myIShoot is 1 
                let myIShoot = Math.floor(Math.random() * 5000);

                if (myIShoot == 1) 
                {
                    this.bombs.push(new bombEntity(document.getElementsByClassName('bombImg')[0], this.enemys[i][1][j].x, this.enemys[i][1][j].y, 300));
                }
            }
        }
    }

    spawnEnemys = () => 
    {
        let locationX = 1,
            locationY = 20,
            enemyImg = document.getElementsByClassName('enemyImg')[0];

        //create 3 rows of 10 enemycharacter objects
        for (let j = 0; j < 3; j++) 
        {
            let derection = {
                left: false,
                right: true
            }
            this.enemys[j][0].push(derection);

            for (let i = 0; i < 10; i++) 
            {
                this.enemys[j][1].push(new enemyCharacter(enemyImg, locationX, locationY));
                locationX += 60;
            }
            locationY += 60;
            locationX = 0;
        }
    }

    changeEnemySpeed = () => 
    {
        let totalAmountEnemys = this.enemys[0][1].length + this.enemys[1][1].length + this.enemys[2][1].length;

        this.enemySpeed = 200 + (30 - totalAmountEnemys) * 4;
    }

    moveEnemys = (int) =>
    {
        //changes enemy derection to move to right if the first enemy x location in the list is the same or les then 0
        if (this.enemys[int][1][0].x <= 0) 
        {
            this.enemys[int][0][0].left = false;
            this.enemys[int][0][0].right = true;
        }
        //changes enemy derection to move to left if the last enemy x location in the list is the same or les then the screen width
        else if (this.enemys[int][1][this.enemys[int][1].length - 1].x + 40 >= canvas.width) 
        {
            this.enemys[int][0][0].left = true;
            this.enemys[int][0][0].right = false;
        }

        //moves row of enemy to the right if enemy derection to move is right 
        if (this.enemys[int][0][0].right) 
        {
            for (let i = 0; i < this.enemys[int][1].length; i++) 
            {
                this.enemys[int][1][i].x = this.enemys[int][1][i].x + this.enemySpeed * cal.deltaTime;
            }
        }
        //moves row of enemy to the left if enemy derection to move is left 
        else if (this.enemys[int][0][0].left) 
        {
            for (let i = 0; i < this.enemys[int][1].length; i++)
            {
                this.enemys[int][1][i].x = this.enemys[int][1][i].x - this.enemySpeed * cal.deltaTime;
            }
        }
    }

    //checks for collision between objects
    collision = () => 
    {
        //goes through every bullet
        for (let i = this.bullets.length - 1; i >= 0; i--) 
        {
            let hitMob = false;
            //goes through every enemy row
            for (let j = this.enemys.length - 1; j >= 0; j--) 
            {
                //goes through every enemy
                for (let k = this.enemys[j][1].length - 1; k >= 0; k--) 
                {
                    //removes enemy from the enemy list if a bullet hits it
                    if (
                        this.bullets[i].x + 2 >= this.enemys[j][1][k].x &&
                        this.bullets[i].x + 2 <= this.enemys[j][1][k].x + 40 &&
                        this.bullets[i].y + 2 >= this.enemys[j][1][k].y &&
                        this.bullets[i].y + 2 <= this.enemys[j][1][k].y + 40
                    ) 
                    {
                        hitMob = true;
                        this.enemys[j][1].splice(k, 1);
                        j = -1;
                        break;
                    }
                }
            }
            //removes bullet from the bullets list if it is of the screen
            if (this.bullets[i].y <= -50) 
            {
                this.bullets.splice(i, 1);
                this.changeEnemySpeed();
            }
            //removes bullet from the bullets list if it has hit a enemy
            else if (hitMob)
            {
                this.bullets.splice(i, 1);
            }
        }

        //goes through every Bomb
        for (let i = this.bombs.length - 1; i >= 0; i--) 
        {
            //removes a player live and the bomb if it has hit the player
            if (
                this.bombs[i].x + 2 >= this.player.x &&
                this.bombs[i].x + 2 <= this.player.x + 33 &&
                this.bombs[i].y + 2 >= this.player.y &&
                this.bombs[i].y + 2 <= this.player.y + 73
            ) 
            {
                this.bombs.splice(i, 1);
                this.player.lives--;
            }
        }
    }
}