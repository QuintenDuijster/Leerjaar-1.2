Wconsole.Create();
showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        let booleanLocal = true;
        let stringLocal = "Local"
        let numberLocal = 1

        this.localBoolean = false;
        this.localString = "not Local";
        this.localNumber = 0;

        Wconsole.print("localBoolean: " + booleanLocal);
        Wconsole.print("localString: " + stringLocal);
        Wconsole.print("localNumber: " + numberLocal);
    }
}

let app = new App();
app.runApplication();

Wconsole.print("localBoolean: " + app.localBoolean);
Wconsole.print("localString: " + app.localString);
Wconsole.print("localNumber: " + app.localNumber);