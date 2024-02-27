Wconsole.Create();
showCode.Html();
showCode.JavaScript('script.js');

Wconsole.print("<-- 01 return -->");
function superMooieGlobalFunction()
{
    Wconsole.print("ik ben global");
    Wconsole.print("dus je mag me overal aanroepen");
}

superMooieGlobalFunction();

Wconsole.print("<-- 02 return -->");

function argumentsAreHandy(shoutout)
{
    Wconsole.print("do you want to give a shoutout");
    Wconsole.print(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("w3.school");
argumentsAreHandy("NO!");

Wconsole.print("<-- 03 return -->");

function heeftEenResultaat()
{
    let resultaat = 1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();
Wconsole.print(hetResultaat);
Wconsole.print(heeftEenResultaat());

function ax2bcWiskunde(x, a, b, c)
{
    let y = (a * (x * x)) + (b * x) + c;
    return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
Wconsole.print(y1);

let y2 = ax2bcWiskunde(3, 6, 5, 45);
Wconsole.print(y2);

let y3 = ax2bcWiskunde(7, 1, 2, 13);
Wconsole.print(y3);

Wconsole.print("<-- 04 return -->");
function ZelfMaken(u, h, l)
{
    let y = Math.log(l) + h + Math.pow(u, 2);
    return y;
}

Wconsole.print(ZelfMaken(4, 4, 4));

