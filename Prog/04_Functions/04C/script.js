showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        console.log("hello world!");
        console.log("hello world!");

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        this.tekenHuis(ctx, 0, 0);
        this.kerstBoom(ctx, 90, 20);
    }

    randomColors()
    {
        let color = "gray";
        for (let i = 0; i < 2; i++)
        {
            let random = Math.random();
            if (random < 0.5)
            {
                color = "yellow";
            }
        }
        return color;
    }

    randomColor()
    {
        let randomR = this.getHex(Math.floor((Math.random() * 255) + 1));
        let randomG = this.getHex(Math.floor((Math.random() * 255) + 1));
        let randomB = this.getHex(Math.floor((Math.random() * 255) + 1));

        let random = randomR + randomG + randomB

        console.log(random);

        return random;
    }

    getHex(v){
          let hex = v.toString(16);
          if(hex.length==1) return "0"+hex;
          else return hex;
    }

    tekenHuis(ctx, x, y)
    {
        ctx.beginPath();
        ctx.moveTo(40 + x, 60 + y);
        ctx.lineTo(40 + x, 100 + y);
        ctx.lineTo(120 + x, 120 + y);
        ctx.lineTo(120 + x, 80 + y);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(120 + x, 120 + y);
        ctx.lineTo(160 + x, 100 + y);
        ctx.lineTo(160 + x, 60 + y);
        ctx.lineTo(120 + x, 80 + y);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(160 + x, 60 + y);
        ctx.lineTo(140 + x, 40 + y);
        ctx.lineTo(120 + x, 80 + y);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.moveTo(140 + x, 40 + y);
        ctx.lineTo(60 + x, 20 + y);
        ctx.lineTo(40 + x, 60 + y);
        ctx.lineTo(120 + x, 80 + y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(110 + x, 117 + y);
        ctx.lineTo(110 + x, 85 + y);
        ctx.lineTo(90 + x, 80 + y);
        ctx.lineTo(90 + x, 112 + y);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = this.randomColors();
        ctx.moveTo(50 + x, 92.5 + y);
        ctx.lineTo(80 + x, 100 + y);
        ctx.lineTo(80 + x, 80 + y);
        ctx.lineTo(50 + x, 72.5 + y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(50 + x, 82.5 + y);
        ctx.lineTo(80 + x, 90 + y);
        ctx.moveTo(65 + x, 97 + y);
        ctx.lineTo(65 + x, 77 + y);
        ctx.moveTo(94 + x, 101 + y);
        ctx.lineTo(104 + x, 104 + y);
        ctx.stroke();
    }

    kerstBoom(ctx, x, y)
    {


        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.moveTo(105 + x, 30 + y);
        ctx.lineTo(105 + x, 10 + y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(105 + x, 25 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(112 + x, 90 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(98 + x, 40 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(105 + x, 55 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(92 + x, 58 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(120 + x, 60 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(103 + x, 80 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(123 + x, 75 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(80 + x, 90 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.randomColor();
        ctx.arc(85 + x, 75 + y, 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

let app = new App();
app.runApplication();
