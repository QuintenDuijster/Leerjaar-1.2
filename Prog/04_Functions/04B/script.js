Wconsole.Create();
showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        Wconsole.print('Hello World');
        this.MARIO();
        Wconsole.print(this.BWAHAHA());
        Wconsole.print(this.Optellen(3, 9));
    }

    newClassFunction(aArgument)
    {
        Wconsole.print('hello world in de newClassFunction');
        Wconsole.print('kom maar met je argument');
        Wconsole.print('hier:');
        Wconsole.print(aArgument);
    }

    MARIO()
    {
        Wconsole.print('MARIO!!');
    }

    BWAHAHA()
    {
        return 'BWAHAHA!!!';
    }

    Optellen(a, b)
    {
        return a + b;
    }
}

let app = new App();
app.runApplication();
app.newClassFunction('nein');
app.MARIO();
Wconsole.print(app.BWAHAHA());
Wconsole.print(app.Optellen(3,9));