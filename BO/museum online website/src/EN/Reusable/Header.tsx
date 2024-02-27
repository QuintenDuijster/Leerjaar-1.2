import React from 'react';
import '../../Reusable/pageStyle.css';

const Header: React.FC = () => 
{
    
    return (
        <header className="Header">
            <nav>
                <a className="Logo" href="http://localhost:5173"><img src="/Images/nxtlogowit.png"></img> <p>Nxt Museum</p></a>
                <ul className="Left">
                    <li className="dropdown">
                        <span><a href="VisitorInformation">Visitor information</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/VisitorInformation">Opening hours</a></li>
                            <li><a href="/VisitorInformation">Directions</a></li>
                            <li><a href="/VisitorInformation">Group visit</a></li>
                            <li><a href="/VisitorInformation">Private Museum Experience</a></li>
                            <li><a href="/VisitorInformation">Guided Tours</a></li>
                            <li><a href="/VisitorInformation">visitor terms</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/Contact">Contact</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/Contact">Plan an event</a></li>
                            <li><a href="/Contact">Work with us</a></li>
                            <li><a href="/Contact">Creative collaboration</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/EducationAndWorkshops">Education and Workshops</a></span>
                        <ul className="dropdown-content">
                            <li><a href="/EducationAndWorkshops">Education</a></li>
                            <li><a href="/EducationAndWorkshops">Workshops</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span><a href="/WhatsLive">What is live</a></span>
                        <ul className="dropdown-content">
                            <li><a href="https://nxtmuseum.com/nl/nxt-news/">Nxt blog</a></li>
                            <li><a href="/WhatsLive">exhibitions</a></li>
                            <li><a href="/WhatsLive">Events</a></li>
                        </ul>
                    </li>
                    <li><a href="/Faq">Faq</a></li>
                    <li><a href="/reviews">reviews</a></li>
                </ul>
                <ul className="Right">
                    <li>
                        <button>NL | ENG</button>
                    </li>
                    <li>
                        <a href="https://tickets.nxtmuseum.com/nl/tickets">Tickets</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;