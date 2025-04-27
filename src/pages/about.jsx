import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', color: '#333' }}>
            <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>About Us</h1>
            <p style={{ lineHeight: '1.6', fontSize: '18px', marginBottom: '20px' }}>
                Welcome to <strong>La Hospital</strong>! We are dedicated to providing top-notch healthcare services to our community.
                Our team of experienced professionals is committed to ensuring the well-being of every patient.
            </p>
            <h2 style={{ color: '#34495e', marginTop: '30px' }}>Our Mission</h2>
            <p style={{ lineHeight: '1.6', fontSize: '18px', marginBottom: '20px' }}>
                Our mission is to deliver compassionate and quality healthcare services with a focus on innovation and excellence.
            </p>
            <h2 style={{ color: '#34495e', marginTop: '30px' }}>Why Choose Us?</h2>
            <ul style={{ lineHeight: '1.8', fontSize: '18px', paddingLeft: '20px' }}>
                <li>Highly qualified medical staff</li>
                <li>State-of-the-art facilities</li>
                <li>Patient-centered care</li>
                <li>24/7 emergency services</li>
            </ul>
            <p style={{ lineHeight: '1.6', fontSize: '18px', marginTop: '30px' }}>
                Thank you for trusting <strong>La Hospital</strong> with your healthcare needs. We are here to serve you and your family.
            </p>
        </div>
    );
};

export default About;