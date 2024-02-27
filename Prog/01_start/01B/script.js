Wconsole.Create();
showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        this.appNaam = "demoApp";
        this.versienummer = 0.1;
        this.versiedatum = new Date();
        this.author = "Quinten";
        this.copyright = "MIT";
        this.distributeur = "mediaCollege";
        this.darkmode = true

        Wconsole.print("appName: " + this.appNaam);
        Wconsole.print("verdieNummer: " + this.versienummer);
        Wconsole.print("versieDatum: " + this.versiedatum);
        Wconsole.print("author: " + this.author);
        Wconsole.print("copyRight: " + this.copyright);
        Wconsole.print("distributeur: " + this.distributeur);
        Wconsole.print("darkMode: " + this.darkmode);
    }
}

let app = new App();
app.runApplication();

Wconsole.print("appName: " + app.appNaam);
Wconsole.print("verdieNummer: " + app.versienummer);
Wconsole.print("versieDatum: " + app.versiedatum);
Wconsole.print("author: " + app.author);
Wconsole.print("copyRight: " + app.copyright);
Wconsole.print("distributeur: " + app.distributeur);
Wconsole.print("darkMode: " + app.darkmode);
