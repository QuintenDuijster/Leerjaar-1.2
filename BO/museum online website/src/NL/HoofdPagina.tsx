import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

const HooftPagina: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum';
    }, []);

    return (
        <>
            <Header />

            <main className="HooftPagina">
                <article className="HooftPagina-Title">
                    <img src="/Images/AppBackground.png"></img>
                    <div>
                        <h1>Nxt Museum</h1>
                        <p>
                            Het eerste museum in Nederland dat zich volledig richt op mediakunst. <br />
                            Ontdek grootschalige, digitale kunstinstallaties die je blik verruimen <br />
                            en de zintuigen op scherp stellen. De kunst van morgen, vandaag.

                        </p>
                    </div>
                </article>
                <article>
                    <img src="/Images/hihi1.jpg"></img>
                    <div>
                        <h2>Wat is Nxt?</h2>
                        <p>
                            Nxt Museum is het eerste museum in Nederland dat zich volledig richt op mediakunst.<br />
                            We exposeren kunstwerken die gebruik maken van moderne technologieen van het heden en van de toekomst.<br />
                            Omdat kunst de tijdsgeest weerspiegelt,<br />
                            geloven wij dat de meest innovatieve kunst ons de mogelijkheid geeft om op de impact van technologische ontwikkelingen te reflecteren.<br />
                            Een moment van bezinning in een realiteit die alsmaar sneller doorontwikkelt.
                        </p><br />
                        <a href="NL/WatIsLive">Tentoonstellingen -&gt;</a>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>De ruimte</h2>
                        <p>
                            Het museum is gevestigd in een voormalige productiestudio in het hart van Amsterdam-Noord - een plek die zich bij uitstek leent voor het ontdekken,<br />
                            maken en tentoonstellen van mediakunst.<br />
                            Deze vorm van kunst experimenteert met technologische mogelijkheden en toepassingen; dynamisch en niet gebonden aan een vorm.<br />
                            Onze  ruimte biedt een broedplaats voor deze vorm van kunst; een plek waar verschillende kunststromingen en wetenschappen samenkomen en tentoongesteld kunnen worden.<br />
                            Een plek voor live performances, educatie, creatie, zang, dans en meer.
                        </p><br />
                    </div>
                    <img src="/Images/hihi2.jpg"></img>
                </article>
                <article>
                    <img src="/Images/hihi3.jpg"></img>
                    <div>
                        <h2>Onze missie</h2>
                        <p>
                            Het is onze missie om vooruitstrevende vormen van creativiteit te stimuleren.<br />
                            Wij zien de toekomst als een van de meest fascinerende concepten van het menselijk brein.<br />
                            Het is een onuitputtelijke bron van inspiratie die ons in de greep houdt en de vraag oproept: 'What`s Nxt?'.<br />
                            Met het oog op technologische en sociale ontwikkelingen is deze vraag een groter mysterie dan ooit tevoren.<br />
                            Ga je mee op zoek naar het antwoord?
                        </p><br/>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
};

export default HooftPagina;