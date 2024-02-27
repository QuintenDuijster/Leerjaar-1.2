Wconsole.Create();
showCode.Html();
showCode.JavaScript('script.js');

class App
{
    runApplication()
    {
        let appNaam = "demoApp";
        let versienummer = 0.1;
        let versiedatum = new Date();
        let author = "Quinten";
        let copyright = "MIT";
        let distributeur = "mediaCollege";
        let darkmode = true

        Wconsole.print("appName: " + appNaam);
        Wconsole.print("verdieNummer: " + versienummer);
        Wconsole.print("versieDatum: " + versiedatum);
        Wconsole.print("author: " + author);
        Wconsole.print("copyRight: " + copyright);
        Wconsole.print("distributeur: " + distributeur);
        Wconsole.print("darkMode: " + darkmode);
    }
}

let app = new App();
app.runApplication();