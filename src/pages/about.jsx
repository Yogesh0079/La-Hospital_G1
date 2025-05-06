import React from 'react';
import "../styles/About.css";
import "../scripts/about.commons";

const About = () => {
return (
    <>
        <div className="hero-bg py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About LA Hospital</h1>
                <p className="text-xl max-w-3xl mx-auto">Compassionate care, cutting-edge technology, and a commitment to excellence in healthcare since 1985.</p>
                <div className="mt-10">
                    <a href="#our-story" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium mr-4 transition duration-300">Our Story</a>
                    <a href="#meet-team" className="bg-transparent hover:bg-white hover:text-blue-600 text-white border-2 border-white px-8 py-3 rounded-md text-lg font-medium transition duration-300">Meet Our Team</a>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                        <div className="text-blue-600 text-4xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                                <circle cx="50" cy="30" r="15" fill="#FFD5B3" stroke="#000" strokeWidth="1.5" />
                                <rect x="40" y="45" width="20" height="30" fill="#5D9BEC" stroke="#000" strokeWidth="1.5" />
                                <path d="M45 50 Q40 45 35 50 Q30 55 35 60 L40 65 Q45 70 50 65 L55 60 Q60 55 55 50 Q50 45 45 50" fill="none" stroke="#000" strokeWidth="1.5" />
                                <circle cx="35" cy="60" r="3" fill="#000" />
                                <circle cx="55" cy="60" r="3" fill="#000" />
                                <rect x="48" y="55" width="4" height="10" fill="#fff" />
                                <rect x="45" y="58" width="10" height="4" fill="#fff" />
                                <path d="M40 20 Q45 15 50 20 Q55 15 60 20" fill="none" stroke="#333" strokeWidth="2" />
                                <circle cx="45" cy="25" r="2" fill="#000" />
                                <circle cx="55" cy="25" r="2" fill="#000" />
                                <path d="M45 35 Q50 38 55 35" fill="none" stroke="#000" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">250+</h3>
                        <p className="text-gray-600">Specialized Doctors</p>
                    </div>
                    <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                        <div className="text-blue-600 text-4xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width="80">
                                <rect x="5" y="30" width="90" height="20" fill="#8B4513" stroke="#000" strokeWidth="1" />
                                <rect x="10" y="25" width="80" height="10" fill="#87CEEB" stroke="#000" strokeWidth="0.5" />
                                <rect x="15" y="20" width="20" height="5" fill="#FFF" stroke="#000" strokeWidth="0.5" />
                                <path d="M25 20 L25 25" stroke="#000" strokeWidth="0.5" strokeDasharray="1,1" />
                                <rect x="40" y="20" width="45" height="5" fill="#FF6347" stroke="#000" strokeWidth="0.5" />
                                <path d="M60 20 L60 25" stroke="#000" strokeWidth="0.5" strokeDasharray="1,1" />
                                <rect x="10" y="50" width="5" height="5" fill="#8B4513" stroke="#000" strokeWidth="0.5" />
                                <rect x="85" y="50" width="5" height="5" fill="#8B4513" stroke="#000" strokeWidth="0.5" />
                            </svg>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mt-10">500+</h3>
                        <p className="text-gray-600">Hospital Beds</p>
                    </div>
                    <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                        <div className="text-blue-600 text-4xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 70" width="80">
                                <rect x="10" y="40" width="80" height="10" fill="#e0f7fa" stroke="#333" strokeWidth="1" />
                                <rect x="5" y="50" width="90" height="5" fill="#b2ebf2" stroke="#333" strokeWidth="1" />
                                <circle cx="50" cy="30" r="12" fill="#ffccbc" stroke="#333" strokeWidth="1" />
                                <circle cx="45" cy="27" r="2" fill="#333" />
                                <circle cx="55" cy="27" r="2" fill="#333" />
                                <path d="M45 35 Q50 40 55 35" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                                <rect x="35" y="42" width="30" height="8" fill="#ffccbc" stroke="#333" strokeWidth="1" />
                                <rect x="25" y="40" width="50" height="10" fill="#80deea" stroke="#333" strokeWidth="1" />
                                <path d="M40 40 L40 50 M50 40 L50 50 M60 40 L60 50" stroke="#4dd0e1" strokeWidth="2" />
                                <path d="M65 35 Q70 30 75 35 L75 38 Q70 43 65 38 Z" fill="#ffccbc" stroke="#333" strokeWidth="1" />
                                <path d="M25 35 Q30 25 35 35 Q40 25 45 35 L35 45 Z" fill="#ff8a80" stroke="#333" strokeWidth="0.5" />
                                <path d="M80 25 Q85 15 90 25 L85 30 Z" fill="#ffd54f" stroke="#333" strokeWidth="0.5" />
                                <line x1="85" y1="30" x2="85" y2="40" stroke="#333" strokeWidth="1" strokeDasharray="2,1" />
                            </svg>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
                        <p className="text-gray-600">Happy Patients</p>
                    </div>
                    <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                        <div className="text-blue-600 text-4xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60">
                                <circle cx="50" cy="50" r="40" fill="#4ECDC4" stroke="#333" strokeWidth="2" />
                                <text x="50" y="55" fontFamily="Arial" fontSize="24" fill="#FFF" textAnchor="middle" fontWeight="bold">10+</text>
                            </svg>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
                        <p className="text-gray-600">Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
export default About;