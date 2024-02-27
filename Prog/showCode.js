class ShowCode
{
    Html()
    {
        var showCode = document.createElement('div');
        var Title = document.createElement('h2');
        var Code = document.createElement('pre');

        var TitleText = document.createTextNode('Html');

        var Html = document.documentElement.innerHTML;
        var CodeText = document.createTextNode(Html);

        Title.appendChild(TitleText);
        Code.appendChild(CodeText);

        showCode.appendChild(Title);
        showCode.appendChild(Code);

        document.getElementsByTagName('main')[0].appendChild(showCode);
    }

    JavaScript(file)
    {
        var showCode = document.createElement('div');
        var Title = document.createElement('h2');
        var Code = document.createElement('pre');

        var TitleText = document.createTextNode(file);

        fetch(file)
            .then((res) => res.text())
            .then((text) =>
            {
                var CodeText = document.createTextNode(text);

                Title.appendChild(TitleText);
                Code.appendChild(CodeText);

                showCode.appendChild(Title);
                showCode.appendChild(Code);

                document.getElementsByTagName('main')[0].appendChild(showCode);
            })
            .catch((e) => console.error(e));
    }

    Css(file)
    {
        var showCode = document.createElement('div');
        var Title = document.createElement('h2');
        var Code = document.createElement('pre');

        var TitleText = document.createTextNode(file);

        fetch(file)
            .then((res) => res.text())
            .then((text) =>
            {
                var CodeText = document.createTextNode(text);

                Title.appendChild(TitleText);
                Code.appendChild(CodeText);

                showCode.appendChild(Title);
                showCode.appendChild(Code);

                document.getElementsByTagName('main')[0].appendChild(showCode);
            })
            .catch((e) => console.error(e));
    }
}

const showCode = new ShowCode();