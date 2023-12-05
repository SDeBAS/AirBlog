import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href='https://www.linkedin.com/in/debanjanbasudd'><FontAwesomeIcon className="footer__socialicons" icon={faLinkedin} /></a>
                <a href="https://github.com/SDeBAS"><FontAwesomeIcon className="footer__socialicons" icon={faGithub} /></a>
            </div>

    
            
            <p className="footer__copyright">
                Copyright &#169; Debanjan Basu 
            </p>
        </footer>
    )
}

export default Footer;