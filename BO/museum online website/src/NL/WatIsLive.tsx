import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

const WatIsLive: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | WatIsLive';
    }, []);

    return (
        <>
            <Header />

            <main className="WhatIsLive">
                <figure>
                    <img src="/Images/whatsLive/whatsLive1.png" alt="Elephant at sunset"> <a href="https://nxtmuseum.com/nl/tentoonstelling/random-international/ "> </a> </img>
                    <figcaption>An elephant at sunset</figcaption>
                </figure>
                <figure>
                    <img src="/Images/whatsLive/whatsLive2.png" alt="Elephant at sunset"> <a href="https://nxtmuseum.com/nl/artist/dimensional-sampling-yuxi-cao/"></a></img>
                    <figcaption>An elephant at sunset</figcaption>
                </figure>
                <figure>
                <img src="/Images/whatsLive/whatsLive3.png" alt="Elephant at sunset"> <a href="https://nxtmuseum.com/nl/tentoonstelling/random-international/ "> </a></img>
                    <figcaption>An elephant at sunset</figcaption>
                </figure>
                <figure>
                    <img src="/Images/whatsLive/whatsLive4.png" alt="Elephant at sunset"> <a href="https://nxtmuseum.com/nl/artist/dimensional-sampling-yuxi-cao/"></a></img>
                    <figcaption>An elephant at sunset</figcaption>
                </figure>
            </main>

            <Footer />
        </>
    );
};

export default WatIsLive;