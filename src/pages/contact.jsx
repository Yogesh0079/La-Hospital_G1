import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h1 style={{ color: '#2c3e50' }}>Contact Us</h1>
            <p>We would love to hear from you! Here are the ways you can reach us:</p>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                    <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#e74c3c' }}></i>
                    Address
                </h2>
                <p>La Hospital</p>
                <p>123 Health Street</p>
                <p>Wellness City, HC 45678</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                    <i className="fas fa-phone" style={{ marginRight: '10px', color: '#27ae60' }}></i>
                    Phone
                </h2>
                <p>+1 (123) 456-7890</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '10px', color: '#2980b9' }}></i>
                    Email
                </h2>
                <p>
                    <a href="mailto:contact@lahospital.com" style={{ color: '#2980b9', textDecoration: 'none' }}>
                        contact@lahospital.com
                    </a>
                </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                    <i className="fas fa-clock" style={{ marginRight: '10px', color: '#f39c12' }}></i>
                    Working Hours
                </h2>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
            </div>

            <div>
                <h2 style={{ color: '#34495e' }}>
                    <i className="fas fa-share-alt" style={{ marginRight: '10px', color: '#8e44ad' }}></i>
                    Follow Us
                </h2>
                <p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998', textDecoration: 'none', marginRight: '10px' }}>
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', textDecoration: 'none', marginRight: '10px' }}>
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e4405f', textDecoration: 'none' }}>
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;