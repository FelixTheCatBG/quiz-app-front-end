import { Instagram, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './footer.css'

const Footer=()=>(
    <div className="footer-container">
        <div className="socials">
        <YouTube/>
        <a href="https://youtube.com">
        </a>
        <Twitter/>
        <a href="https://twitter.com">
        </a>
        <Instagram/>
        <a href="https://instagram.com">
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