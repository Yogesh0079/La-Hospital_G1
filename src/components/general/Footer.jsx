import React from 'react';
import '../../styles/Footer.css'; // Optional: Add custom styles for the footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4 animate-text">
                        <i className="fas fa-hospital text-blue-400 text-3xl mr-3"></i>
                        <span className="text-2xl font-bold">MediCare</span>
                    </div>
                    <p className="text-gray-400 mb-4 animate-text delay-1">Providing exceptional healthcare services with compassion and innovation since 1995.</p>
                    <div className="flex space-x-4 animate-text delay-2">
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4 animate-text delay-3">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition animate-text delay-4">Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition animate-text delay-5">About Us</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-white transition animate-text delay-6">Services</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition animate-text delay-7">Contact</a></li>
                        <li><a href="login.html" className="text-gray-400 hover:text-white transition animate-text delay-8">Patient Login</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4 animate-text delay-4">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition animate-text delay-5">Cardiology</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition animate-text delay-6">Neurology</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition animate-text delay-7">Orthopedics</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition animate-text delay-8">Pediatrics</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition animate-text delay-9">Emergency Care</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4 animate-text delay-5">Newsletter</h4>
                    <p className="text-gray-400 mb-4 animate-text delay-6">Subscribe to our newsletter for health tips and hospital updates.</p>
                    <form className="flex animate-text delay-7">
                        <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full"/>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0 animate-text delay-8">© 2023 MediCare Hospital. All rights reserved.</p>
                <div className="flex space-x-6 animate-text delay-9">
                    <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;