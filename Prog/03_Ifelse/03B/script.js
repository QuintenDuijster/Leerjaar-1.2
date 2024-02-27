showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        console.log("hello world!");

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(40, 60);
        ctx.lineTo(40, 100);
        ctx.lineTo(120, 120);
        ctx.lineTo(120, 80);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(120, 120);
        ctx.lineTo(160, 100);
        ctx.lineTo(160, 60);
        ctx.lineTo(120, 80);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(160, 60);
        ctx.lineTo(140, 40);
        ctx.lineTo(120, 80);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.moveTo(140, 40);
        ctx.lineTo(60, 20);
        ctx.lineTo(40, 60);
        ctx.lineTo(120, 80);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(110, 117);
        ctx.lineTo(110, 85);
        ctx.lineTo(90, 80);
        ctx.lineTo(90, 112);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = this.randomColors();
        ctx.moveTo(50, 92.5);
        ctx.lineTo(80, 100);
        ctx.lineTo(80, 80);
        ctx.lineTo(50, 72.5);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(50, 82.5);
        ctx.lineTo(80, 90);
        ctx.moveTo(65, 97);
        ctx.lineTo(65, 77);
        ctx.moveTo(94, 101);
        ctx.lineTo(104, 104);
        ctx.stroke();
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
}

let app = new App();
app.runApplication();
