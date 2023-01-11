import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer=()=>(
    <div className="footer-container">
        <div className="socials">
        <a href="https://www.youtube.com" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x"/>
        </a>
        <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </div>
        <div className="copyright">
            <p>&trade; & &copy; 2023 Quizz App and all related logos, names and distinctive likenesses thereof are exclusive property 
            to Project, Inc. All Rights Reserved.</p>
            <p className="links">
                <a href="App.js">Privacy Notice</a>
                <a href="App.js">Terms of Service</a>
                <a href="App.js">Cookies Preferences</a>
            </p>
        </div>
    </div>
)
export default Footer;