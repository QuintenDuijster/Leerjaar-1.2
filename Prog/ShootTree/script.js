showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");


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
    }

function ShootTree(event)
{
    let text = "You pressed button: " + event.button;
    document.getElementById("demo").innerHTML = text;
}

let app = new App();
app.runApplication();
