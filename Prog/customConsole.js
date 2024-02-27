class WConsole
{
    Create()
    {
        this.Console = document.createElement('div');
        this.Title = document.createElement('h2');
        this.ConsoleContent = document.createElement('div');
        this.PreSet = document.createElement('div');
        this.Time = document.createElement('p');
        this.Message = document.createElement('p');

        this.TitleText = document.createTextNode('Console');

        this.Title.appendChild(this.TitleText);

        this.Console.appendChild(this.Title);
        this.ConsoleContent.style.height = '20vw';
        this.ConsoleContent.style.width = '50vw';
        this.ConsoleContent.style.border = '2px solid black';
        this.ConsoleContent.style.overflow = 'scroll';
        this.ConsoleContent.id = 'ConsoleContent';
        this.Console.appendChild(this.ConsoleContent);

        this.PreSet.appendChild(this.Time);
        this.PreSet.appendChild(this.Message);
        this.PreSet.style.display = 'none';
        this.PreSet.id = 'ConsoleMassage';

        document.getElementsByTagName('main')[0].appendChild(this.PreSet);
        document.getElementsByTagName('main')[0].appendChild(this.Console);
    }

    print(Massage)
    {
        console.log(Massage);
        const PresetItem = document.getElementById('ConsoleMassage');
        const Item = PresetItem.cloneNode(true);

        Item.style.display = 'flex';

        const Paragraphs = Item.querySelectorAll('p');

        let now = new Date();

        let Hour = now.getHours();
        let Minute = now.getMinutes();
        let Second = now.getSeconds();

        Paragraphs[0].textContent = '(' + Hour + ':' + Minute + ':' + Second + ')';
        Paragraphs[0].style.color = 'blue';

        Paragraphs[1].textContent = Massage;

        if (typeof Massage === 'boolean')
        {
            Paragraphs[1].style.color = 'green';
        }

        if (typeof Massage === 'number')
        {
            Paragraphs[1].style.color = 'orange';
        }

        document.getElementById('ConsoleContent').appendChild(Item);
    }
}

const Wconsole = new WConsole();