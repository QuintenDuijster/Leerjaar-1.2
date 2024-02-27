import React, { useEffect } from 'react';
import Header from './Reusable/Header.tsx';
import Footer from './Reusable/Footer.tsx';

const WhatsLive: React.FC = () =>
{
    useEffect(() =>
    {
        document.title = 'Nxt Museum | WhatIsLive';
    }, []);

    return (
        <>
            <Header />

            <main className="WhatIsLive">
                <figure className="WhatIsLive-left">
                    <a href="https://nxtmuseum.com/nl/tentoonstelling/random-international/ ">
                        <img src="/Images/whatsLive/whatsLive1.png" alt="a image" />
                    </a>
                    <figcaption>Presence and Erasure</figcaption>
                </figure>
                <figure className="WhatIsLive-right">
                    <a href="https://nxtmuseum.com/nl/tentoonstelling/random-international/ ">
                        <img src="/Images/whatsLive/whatsLive2.jpg" alt="a image" />
                    </a>
                    <figcaption>Swarm Study XIII</figcaption>
                </figure>
                <figure className="WhatIsLive-left">
                    <a href="https://nxtmuseum.com/nl/tentoonstelling/random-international/ ">
                        <img src="/Images/whatsLive/whatsLive3.jpg" alt="a image" />
                    </a>
                    <figcaption>Life in our Minds: Motherflock III</figcaption>
                </figure>
                <figure className="WhatIsLive-right">
                    <a href="https://nxtmuseum.com/nl/tentoonstelling/random-international/ ">
                        <img src="/Images/whatsLive/whatsLive4.jpg" alt="a image" />
                    </a>
                    <figcaption>Living Room</figcaption>
                </figure>
            </main>

            <Footer />
        </>
    );
};

export default WhatsLive;