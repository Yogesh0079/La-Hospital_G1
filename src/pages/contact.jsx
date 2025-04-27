import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contact Us</h1>
            <p>We would love to hear from you! Here are the ways you can reach us:</p>

            <div style={{ marginBottom: '20px' }}>
                <h2>Address</h2>
                <p>La Hospital</p>
                <p>123 Health Street</p>
                <p>Wellness City, HC 45678</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Phone</h2>
                <p>+1 (123) 456-7890</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Email</h2>
                <p>
                    <a href="mailto:contact@lahospital.com">contact@lahospital.com</a>
                </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Working Hours</h2>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
            </div>

            <div>
                <h2>Follow Us</h2>
                <p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;