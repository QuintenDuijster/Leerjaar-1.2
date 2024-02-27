showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        let drawThis = [];
        let treeAmount = Math.floor(Math.random() * 10);
        if(treeAmount < 1)treeAmount = 1;
        let houseAmount = Math.floor(Math.random() * 10);
        if (houseAmount < 1) houseAmount = 1;


        for (let i = 0; i < treeAmount; i++)
        {
            let tree = {
                name: "tree",
                size: Math.random(),
                color: this.randomColor(),
                position: this.randomPosistion()
            }

            drawThis.push(tree);
        }

        for (let j = 0; j < houseAmount; j++)
        {
            let house = {
                name: "house",
                size: Math.random(),
                color: this.randomColor(),
                position: this.randomPosistion()
            }

            drawThis.push(house);
        }

        this.drawItems(ctx, drawThis);
    }

    drawItems(ctx, drawThis)
    {
        for (let i = 0; i < drawThis.length; i++)
        {
            if (drawThis[i].name == "tree")
            {
                this.drawBoom(ctx, drawThis[i].color, drawThis[i].size, drawThis[i].position);
            } else
            {
                this.drawHouse(ctx ,drawThis[i].color, drawThis[i].size, drawThis[i].position);
            }
        }
    }

    drawHouse(ctx, color, size, position)
    {
        console.log(color, size, position)
        ctx.beginPath();
        ctx.moveTo(40 + position.x * size, 60 + position.y * size);
        ctx.lineTo(40 + position.x  * size, 100 + position.y  * size);
        ctx.lineTo(120 + position.x  * size, 120 + position.y  * size);
        ctx.lineTo(120 + position.x  * size, 80 + position.y  * size);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(120 + position.x * size, 120 + position.y * size);
        ctx.lineTo(160 + position.x * size, 100 + position.y * size);
        ctx.lineTo(160 + position.x * size, 60 + position.y * size);
        ctx.lineTo(120 + position.x * size, 80 + position.y * size);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(160 + position.x * size, 60 + position.y * size);
        ctx.lineTo(140 + position.x  * size, 40 + position.y * size);
        ctx.lineTo(120 + position.x  * size, 80 + position.y * size);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(140 + position.x * size, 40 + position.y * size);
        ctx.lineTo(60 + position.x * size, 20 + position.y * size);
        ctx.lineTo(40 + position.x * size, 60 + position.y * size);
        ctx.lineTo(120 + position.x * size, 80 + position.y * size);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(110 + position.x * size, 117 + position.y * size);
        ctx.lineTo(110 + position.x * size, 85 + position.y * size);
        ctx.lineTo(90 + position.x * size, 80 + position.y * size);
        ctx.lineTo(90 + position.x * size, 112 + position.y * size);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.moveTo(50 + position.x * size, 92.5 + position.y * size);
        ctx.lineTo(80 + position.x * size, 100 + position.y * size);
        ctx.lineTo(80 + position.x * size, 80 + position.y * size);
        ctx.lineTo(50 + position.x * size, 72.5 + position.y * size);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(50 + position.x * size, 82.5 + position.y * size);
        ctx.lineTo(80 + position.x * size, 90 + position.y * size);
        ctx.moveTo(65 + position.x * size, 97 + position.y * size);
        ctx.lineTo(65 + position.x * size, 77 + position.y * size);
        ctx.moveTo(94 + position.x * size, 101 + position.y * size);
        ctx.lineTo(104 + position.x * size, 104 + position.y * size);
        ctx.stroke();
    }

    drawBoom(ctx ,color, size, position){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(100 + position.x * size, 100 + position.y);
        ctx.lineTo(100 + position.x * size, 120 + position.y * size);
        ctx.lineTo(110 + position.x * size, 120 + position.y * size);
        ctx.lineTo(110 + position.x * size, 100 + position.y * size);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'brown';
        ctx.moveTo(70 + position.x * size, 100 + position.y);
        ctx.lineTo(140 + position.x * size, 100 + position.y * size);
        ctx.lineTo(105 + position.x * size, 10 + position.y * size);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    drawBall(Color, Size){
        //not yes here
    }

    drawSter(Color, Size){
        //not yet here
    }


    randomPosistion()
    {
        let X = Math.floor(Math.random() * 1000);
        let Y = Math.floor(Math.random() * 1000);

        let position = {
            x: X,
            y: Y
        }
        console.log(position);
        return position;
    }

    randomColor()
    {
        let R = this.getHex(Math.floor(Math.random() * 255));
        let G = this.getHex(Math.floor(Math.random() * 255));
        let B = this.getHex(Math.floor(Math.random() * 255));

        let color = "#" + R + G + B;

        return color;
    }

    getHex(v){
        let hex = v.toString(16);
        if(hex.length==1) return "0"+hex;
        else return hex;
    }
}

let app = new App();
app.runApplication();
