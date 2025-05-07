import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }} className="flex flex-col items-center text-center">
            <h1 style={{ color: '#2c3e50' }}>Contact Us</h1>
            <p>We would love to hear from you! Here are the ways you can reach us:</p>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className=" ml-20 h-6 w-6 text-red-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                </svg>
                    Address
                </h2>
                <p>La Hospital</p>
                <p>123 Health Street</p>
                <p>Wellness City, HC 45678</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.1 8.81 19.86 19.86 0 0 1 .05 1.59 2 2 0 0 1 2.07-.39h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .6 2.57 2 2 0 0 1-.45 2.11L6 7a16 16 0 0 0 7 7l1-1a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.6 2 2 0 0 1 1.72 2z"/>
                </svg>
                    Phone
                </h2>
                <p>+1 (123) 456-7890</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#34495e' }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                    Working Hours
                </h2>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
            </div>

            <div>
                <h2 style={{ color: '#34495e' }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="5" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="19" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Follow Us
                </h2>
                <p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998', textDecoration: 'none', marginRight: '10px' }}>
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', textDecoration: 'none', marginRight: '10px' }}>
                        <i className="fab fa-twitter"></i> <b>X</b>
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