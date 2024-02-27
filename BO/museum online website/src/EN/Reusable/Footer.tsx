import React from 'react';
import '../../Reusable/pageStyle.css';



const Footer: React.FC = () => 
{
    return (
        <footer className="Footer">
            <img src="/Images/nxtlogowit.png"></img>  
            <div>
                <nav>
                    <ul>
                        <li><a className="hoverLink" href="#"><h3>About us</h3></a></li>
                        <li><a className="hoverLink" href="#">Our team</a></li>
                        <li><a className="hoverLink" href="#">Food and drink</a></li>
                        <li><a className="hoverLink" href="#">Our house rules</a></li>
                    </ul>
                    <ul>
                        <li><a className="hoverLink" href="#"><h3>Outings</h3></a></li>
                        <li><a className="hoverLink" href="#">Company outing</a></li>
                        <li><a className="hoverLink" href="#">Education</a></li>
                        <li><a className="hoverLink" href="#">Workshops</a></li>
                    </ul>
                    <ul>
                        <li><a className="hoverLink" href="#"><h3>Contact</h3></a></li>
                        <li><a className="hoverLink" href="#">Vacancies</a></li>
                        <li><a className="hoverLink" href="#">partner</a></li>
                        <li><a className="hoverLink" href="#">Press</a></li>
                    </ul>
                </nav>

                <div className="lineHorizontal"></div>

                <div className="information">
                    <ul>
                        <li className="Line"></li>
                        <li><h3>Address</h3></li>
                        <li><p>Asterweg 22 <br /> 1031 HP Amsterdam</p></li>
                    </ul>
                    <ul>
                        <li className="Line"></li>
                        <li><h3>Contact us</h3></li>
                        <li><p>Phonenumber: <br /> 727-425-2760 <br /> Email: <br /> info@nxtmuseum.com</p></li>
                    </ul>
                    <ul>
                        <li className="Line"></li>
                        <li><h3>Follow Nxt</h3></li>
                        <li><a href="https://www.instagram.com/nxtmuseum/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.youtube.com/channel/UC1Afhs22rJqLfblV4GOpFTA" target="_blank">Youtube</a></li>
                        <li><a href="https://www.tiktok.com/@nxtmuseum?" target="_blank">TikTok</a></li>
                        <li><a href="https://twitter.com/nxtmuseum" target="_blank">Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="lineVertical"></div>

            <ul>
                <li>Monday: gesloten</li>
                <li>Tuesday: 10:30 - 20:30</li>
                <li>Wednesday: 11:00 - 21:30</li>
                <li>Thursday: 10:30 - 22:30</li>
                <li>Friday: gesloten</li>
                <li>Saturday: 10:30 - 20:30</li>
                <li>Sunday: 10:30 - 22:30</li>
            </ul>
        </footer>
    );
};

export default Footer;