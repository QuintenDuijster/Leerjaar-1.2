import React from 'react';
import '../../Reusable/pageStyle.css';

const Header: React.FC = () => 
{
    return (
        <header className="Header">
            <nav>
                <a className="Logo" href="http://localhost:5173/NL"><img src="/Images/nxtlogowit.png"></img> <p>Nxt Museum</p></a>
                <ul className="Left">
                    <li className="dropdown">
                        <span><a href="/NL/BezoekersInformatie">Bezoekers informatie</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/BezoekersInformatie">Openingstijden</a></li>
                            <li><a href="/NL/BezoekersInformatie">Roete beschrijving</a></li>
                            <li><a href="/NL/BezoekersInformatie">Groepsbezoek</a></li>
                            <li><a href="/NL/BezoekersInformatie">Prive museumervaring</a></li>
                            <li><a href="/NL/BezoekersInformatie">Begleide tour</a></li>
                            <li><a href="/NL/BezoekersInformatie">Bezoekers voorwaarden</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/Contact">Contact</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/Contact">Plan een evenement</a></li>
                            <li><a href="/NL/Contact">Werk met ons samen</a></li>
                            <li><a href="/NL/Contact">Creatieve samenwerking</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/OpleidingenEnWorkshops">Educatie en workshops</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/NL/EducatieEnWorkshops">Onderwijs</a></li>
                            <li><a href="/NL/EducatieEnWorkshops">Workshops</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/NL/WatIsLive">Wat is live</a></span>
                        <ul className="dropdown-content">
                            <li><a href="https://nxtmuseum.com/nl/nxt-news/">Nxt blog</a></li>
                            <li><a href="/NL/WatIsLive">Tentoonstellingen</a></li>
                            <li><a href="/NL/WatIsLive">Evenementen</a></li>
                        </ul>
                    </li>
                    <li><a href="/NL/Faq">Faq</a></li>
                    <li><a href="/NL/reviews">reviews</a></li>
                </ul>
                <ul className="Right">
                    <li>
                        <button>NL | ENG</button>
                    </li>
                    <li className="header-tickets">
                        <a href="https://tickets.nxtmuseum.com/nl/tickets">Kaartjes</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;