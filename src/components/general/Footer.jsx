import React from 'react';
import '../../styles/Footer.css'; // Optional: Add custom styles for the footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Address Column */}
                <div className="footer-column">
                    <h3>Address</h3>
                    <p>123 Main Street</p>
                    <p>City, State, ZIP</p>
                    <p>Country</p>
                </div>

                {/* Links Column */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social Links Column */}
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;