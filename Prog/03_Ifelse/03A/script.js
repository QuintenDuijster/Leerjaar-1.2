showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        console.log("hello world!");

        const newsTitle = document.getElementById("newstitle");
        newsTitle.style.backgroundColor = "red";

        const newsitems = [document.getElementsByClassName("gamenews headline")[0], document.getElementsByClassName("gamenews")[1]];

        for (let i = 0; i < 2; i++)
        {
            let random = Math.random();
            console.log(random);

            if (random < 0.2)
            {
                newsitems[i].style.backgroundColor = "red";
            }

            if (random > 0.2 && random < 0.4)
            {
                newsitems[i].style.backgroundColor = "yellow";
            }
            if (random > 0.4 && random < 0.8)
            {
                newsitems[i].style.backgroundColor = "blue";
            }
            if (random > 0.8)
            {
                newsitems[i].style.backgroundColor = "black";
            }
        }
    }
}

let app = new App();
app.runApplication();

