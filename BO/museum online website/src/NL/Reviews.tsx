import React, { useEffect } from 'react';
import Header from './Herbruikbaar/Header.tsx';
import Footer from './Herbruikbaar/Footer.tsx';

const Reviews: React.FC = () => {

    useEffect(() => {
        document.title = 'Nxt Museum | OpleidingenEnWorkshops';
    }, []);

    return (


        <>
            <Header />

            <main className="reviews">

                <div className="Intro">
                    <h1>Onze reviews</h1>
                    <p id="SmallDisclaimer">Sommige van onze reviews zijn geschreven in het Engels</p>
                </div>

                <div className="Review" id="one">

                    <h2>Van Andy Palmer</h2>
                    <p><b>Beoordeeld 5/5</b></p>
                    <p>We very nearly didn't visit NXT while in Dam, but glad we did! It is quite small in size, but if you take your time and enjoy the experience it is worth the price.
                        We spent around 1.5 hours here, would definitely recommend.</p>

                </div>

                <div className="Review" id="two">

                    <h2>Van Hotspot Finders</h2>
                    <p><b>Beoordeeld 5/5</b></p>
                    <p>The Nxt Museum is an incredibly cool experience, perfect for a visit with friends. The interactive nature of the exhibits makes it a photography enthusiast's dream, and each room, especially Yuxi's Dimensional Sampling, is exceptionally impressive. A must-see</p>
                </div>
                <div className="Review" id="three">

                    <h2>Van Reinier Brouwer</h2>
                    <p><b>Beoordeeld 5/5</b></p>
                    <p>Until June 2024, you have the chance to watch the exhibition "Life in a Different Resolution" at Nxt Museum. We already went last month and had an interesting experience, it is definitely a different exhibition compared to previous ones, it relates to the future as we see it now. Be prepared to dive into a living room of vertical lights, understand through lights how you can distinguish a walking human, and have shots of you taken by an AI machine. Overall it is a pretty cool experience. We stayed for an hour, and that is more than enough to go through the different parts of the exhibition; some you will enjoy better than others, but we found it quite an interesting concept and definitely recommend going and having a look. Nxt is always a step ahead in terms of what they showcase, and it's one of our go-to museums in Amsterdam :). Recommend booking the tickets in advance, and every time we have gone at around 9 PM which is an hour before the museum closes, but we never had any trouble with waiting in line. As said above, 1 hour is quite enough to spend at the museum.
                    Not posting too many pics on this review, as it is better to see it for yourself and be surprised.</p>
                </div>

            </main>

            <Footer />
        </>
    )
}

export default Reviews;