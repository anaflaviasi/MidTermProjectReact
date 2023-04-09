import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'reactstrap';
import './Footer.css';

function Footer(){
    return(
       <div className="footer-container">
            <div className="footer-content">
                <div>
                Follow Us
                </div>
                <div className="d-flex flex-row mb-3 justify-content-evenly social-media">
                    <Button className="social-icon facebook">
                    <a href="https://www.facebook.com" title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                    </Button>
                    <Button className="social-icon twitter">
                    <a href="https://www.twitter.com" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                    </Button>
                    <Button className="social-icon instagram">
                    <a href="https://www.instagram.com" title="Instagram" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                    </Button>
                    <Button className="social-icon linkedin">
                    <a href="https://www.linkedin.com" title="Linkedin" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    </Button>
                </div>
                <div className="txt-rights">
                    <p>
                    Making experiences better for everyone.
                    </p>
                    <p>
                        Copyright © 2023 theurband.com, Inc., All Rights Reserved.
                    </p>
                </div>
            </div>
       </div> 
    )
}

export default Footer;