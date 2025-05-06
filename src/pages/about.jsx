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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" >
                    {/* <!-- Doctor's head --> */}
                    <circle cx="50" cy="30" r="15" fill="#FFD5B3" stroke="#000" stroke-width="1.5"/>
                    
                    {/* <!-- Doctor's body --> */}
                    <rect x="40" y="45" width="20" height="30" fill="#5D9BEC" stroke="#000" stroke-width="1.5"/>
                    
                    {/* <!-- Stethoscope --> */}
                    <path d="M45 50 Q40 45 35 50 Q30 55 35 60 L40 65 Q45 70 50 65 L55 60 Q60 55 55 50 Q50 45 45 50" 
                            fill="none" stroke="#000" stroke-width="1.5"/>
                    <circle cx="35" cy="60" r="3" fill="#000"/>
                    <circle cx="55" cy="60" r="3" fill="#000"/>
                    
                    {/* <!-- Medical cross on coat --> */}
                    <rect x="48" y="55" width="4" height="10" fill="#fff"/>
                    <rect x="45" y="58" width="10" height="4" fill="#fff"/>
                    
                    {/* <!-- Doctor's hair --> */}
                    <path d="M40 20 Q45 15 50 20 Q55 15 60 20" fill="none" stroke="#333" stroke-width="2"/>
                    
                    {/* <!-- Doctor's face --> */}
                    <circle cx="45" cy="25" r="2" fill="#000"/> 
                    <circle cx="55" cy="25" r="2" fill="#000"/> 
                    <path d="M45 35 Q50 38 55 35" fill="none" stroke="#000" stroke-width="1.5"/> 
                    </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">250+</h3>
                    <p className="text-gray-600">Specialized Doctors</p>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                    <div className="text-blue-600 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width="80">
                        <rect x="5" y="30" width="90" height="20" fill="#8B4513" stroke="#000" stroke-width="1"/>
                        
                        <rect x="10" y="25" width="80" height="10" fill="#87CEEB" stroke="#000" stroke-width="0.5"/>
                        
                        <rect x="15" y="20" width="20" height="5" fill="#FFF" stroke="#000" stroke-width="0.5"/>
                        <path d="M25 20 L25 25" stroke="#000" stroke-width="0.5" stroke-dasharray="1,1"/>
                        
                        <rect x="40" y="20" width="45" height="5" fill="#FF6347" stroke="#000" stroke-width="0.5"/>
                        <path d="M60 20 L60 25" stroke="#000" stroke-width="0.5" stroke-dasharray="1,1"/>
                        
                        <rect x="10" y="50" width="5" height="5" fill="#8B4513" stroke="#000" stroke-width="0.5"/>
                        <rect x="85" y="50" width="5" height="5" fill="#8B4513" stroke="#000" stroke-width="0.5"/>
                    </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mt-10">500+</h3>
                    <p className="text-gray-600">Hospital Beds</p>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                    <div className="text-blue-600 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 70" width="80">
                    <rect x="10" y="40" width="80" height="10" fill="#e0f7fa" stroke="#333" stroke-width="1"/>
                    <rect x="5" y="50" width="90" height="5" fill="#b2ebf2" stroke="#333" stroke-width="1"/>
                    
                    <circle cx="50" cy="30" r="12" fill="#ffccbc" stroke="#333" stroke-width="1"/>
                    
                    <circle cx="45" cy="27" r="2" fill="#333"/> 
                    <circle cx="55" cy="27" r="2" fill="#333"/> 
                    <path d="M45 35 Q50 40 55 35" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/> 
                    
                    <rect x="35" y="42" width="30" height="8" fill="#ffccbc" stroke="#333" stroke-width="1"/>
                    
                    <rect x="25" y="40" width="50" height="10" fill="#80deea" stroke="#333" stroke-width="1"/>
                    <path d="M40 40 L40 50 M50 40 L50 50 M60 40 L60 50" stroke="#4dd0e1" stroke-width="2"/>
                    
                    <path d="M65 35 Q70 30 75 35 L75 38 Q70 43 65 38 Z" fill="#ffccbc" stroke="#333" stroke-width="1"/>
                    
                    <path d="M25 35 Q30 25 35 35 Q40 25 45 35 L35 45 Z" fill="#ff8a80" stroke="#333" stroke-width="0.5"/>
                    
                    <path d="M80 25 Q85 15 90 25 L85 30 Z" fill="#ffd54f" stroke="#333" stroke-width="0.5"/>
                    <line x1="85" y1="30" x2="85" y2="40" stroke="#333" stroke-width="1" stroke-dasharray="2,1"/>
                    </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
                    <p className="text-gray-600">Happy Patients</p>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                    <div className="text-blue-600 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60">
  <circle cx="50" cy="50" r="40" fill="#4ECDC4" stroke="#333" stroke-width="2"/>
  <text x="50" y="55" font-family="Arial" font-size="24" fill="#FFF" text-anchor="middle" font-weight="bold">10+</text>
</svg>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
                    <p className="text-gray-600">Years Experience</p>
                </div>
            </div>
        </div>
    </div>

    <div id="our-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="mb-12 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p className="text-gray-600 mb-6">Founded in 1985, LA Hospital began as a small community clinic with a vision to provide exceptional healthcare services to the Los Angeles area. What started as a 20-bed facility has now grown into one of the most advanced medical centers in Southern California.</p>
                    <p className="text-gray-600 mb-6">Our journey has been marked by continuous innovation, expansion of services, and an unwavering commitment to patient-centered care. We've pioneered several medical breakthroughs and have been at the forefront of adopting cutting-edge technologies.</p>
                    <p className="text-gray-600 mb-8">Today, LA Hospital stands as a beacon of hope and healing, serving over 100,000 patients annually with compassion, expertise, and state-of-the-art facilities.</p>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300 inline-flex items-center">
                        Learn More About Our Services
                    </a>
                </div>
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3" alt="Hospital building" className="rounded-lg shadow-xl w-full"/>
                    <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg w-3/4 pulse-animation">
                        <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                        <p className="text-sm">To provide exceptional healthcare with compassion, innovation, and excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="timeline-item relative text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-clinic-medical text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">1985</h3>
                            <p className="text-gray-600">LA Hospital founded as a small community clinic with 20 beds and 5 physicians.</p>
                        </div>
                    </div>
                    <div className="timeline-item relative text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-expand text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">1995</h3>
                            <p className="text-gray-600">Expanded to 100-bed facility with specialized departments and emergency services.</p>
                        </div>
                    </div>
                    <div className="timeline-item relative text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-heart text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">2005</h3>
                            <p className="text-gray-600">Opened the Heart & Vascular Institute, becoming a regional leader in cardiac care.</p>
                        </div>
                    </div>
                    <div className="timeline-item relative text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-baby text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">2010</h3>
                            <p className="text-gray-600">Launched Women & Children's Center with advanced neonatal intensive care.</p>
                        </div>
                    </div>
                    <div className="timeline-item relative text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-robot text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">2018</h3>
                            <p className="text-gray-600">Implemented robotic surgery program and AI-assisted diagnostics.</p>
                        </div>
                    </div>
                    <div className="timeline-item relative text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-star text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Today</h3>
                            <p className="text-gray-600">Recognized as a top hospital in California with 500+ beds and 250+ specialists.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="meet-team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">Dedicated professionals committed to your health and wellbeing.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="doctor-card bg-white rounded-lg shadow-md overflow-hidden relative group">
                    <div className="relative overflow-hidden">
                        <div className="doctor-overlay absolute inset-0 bg-blue-600 bg-opacity-90 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 p-6">
                            <h3 className="text-white text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                            <p className="text-blue-100 mb-4">Chief Medical Officer</p>
                            <p className="text-white text-sm text-center">Board-certified cardiologist with 20+ years of experience in patient care and hospital administration.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-white hover:text-blue-200"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-white hover:text-blue-200"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
                        <p className="text-blue-600">Chief Medical Officer</p>
                    </div>
                </div>
                
                <div className="doctor-card bg-white rounded-lg shadow-md overflow-hidden relative group">
                    <div className="relative overflow-hidden">
                        <div className="doctor-overlay absolute inset-0 bg-blue-600 bg-opacity-90 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 p-6">
                            <h3 className="text-white text-xl font-bold mb-2">Dr. Michael Chen</h3>
                            <p className="text-blue-100 mb-4">Director of Surgery</p>
                            <p className="text-white text-sm text-center">Pioneer in minimally invasive surgical techniques with numerous publications in medical journals.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-white hover:text-blue-200"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-white hover:text-blue-200"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900">Dr. Michael Chen</h3>
                        <p className="text-blue-600">Director of Surgery</p>
                    </div>
                </div>
                
                <div className="doctor-card bg-white rounded-lg shadow-md overflow-hidden relative group">
                    <div className="relative overflow-hidden">
                        <div className="doctor-overlay absolute inset-0 bg-blue-600 bg-opacity-90 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 p-6">
                            <h3 className="text-white text-xl font-bold mb-2">Dr. Lisa Rodriguez</h3>
                            <p className="text-blue-100 mb-4">Chief of Pediatrics</p>
                            <p className="text-white text-sm text-center">Nationally recognized pediatric specialist focused on innovative treatments for childhood diseases.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-white hover:text-blue-200"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-white hover:text-blue-200"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900">Dr. Lisa Rodriguez</h3>
                        <p className="text-blue-600">Chief of Pediatrics</p>
                    </div>
                </div>
                
                <div className="doctor-card bg-white rounded-lg shadow-md overflow-hidden relative group">
                    <div className="relative overflow-hidden">
                        <div className="doctor-overlay absolute inset-0 bg-blue-600 bg-opacity-90 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 p-6">
                            <h3 className="text-white text-xl font-bold mb-2">Dr. James Wilson</h3>
                            <p className="text-blue-100 mb-4">Chief of Neurology</p>
                            <p className="text-white text-sm text-center">Renowned neurologist specializing in stroke prevention and treatment with groundbreaking research.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-white hover:text-blue-200"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-white hover:text-blue-200"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900">Dr. James Wilson</h3>
                        <p className="text-blue-600">Chief of Neurology</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
                    View All Doctors
                </a>
            </div>
        </div>
    </div>

    <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M30 50 Q20 65 30 80 L40 75 Q32 65 40 50 Z" fill="#FFD5B3" stroke="#333"/>
                    <path d="M70 50 Q80 65 70 80 L60 75 Q68 65 60 50 Z" fill="#FFD5B3" stroke="#333"/>
                    <path d="M50 40 Q60 20 70 40 Q80 60 50 80 Q20 60 30 40 Q40 20 50 40 Z" fill="#FF6B6B" stroke="#333"/>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Compassion</h3>
                    <p className="text-gray-600 text-center">We treat every patient with empathy, kindness, and respect, understanding that healing begins with compassionate care.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="45" fill="#f0f8ff" stroke="#4b86b4" stroke-width="2"/>
                    
                    <path d="M50 20 L55 30 L45 30 Z" fill="#ffd700"/> 
                    <path d="M50 30 A10 10 0 1 1 50 50 A10 10 0 1 0 50 30 Z" fill="#ffd700"/> 
                    <rect x="47" y="50" width="6" height="10" fill="#4b86b4"/> 
                    
                    <path d="M20 50 Q35 30 50 50 T80 50" stroke="#4b86b4" stroke-width="2" fill="none"/>
                    <path d="M30 70 L70 30" stroke="#4b86b4" stroke-width="2" stroke-dasharray="3,2"/>
                    
                    <text x="50" y="85" font-family="Arial" font-size="10" text-anchor="middle" fill="#4b86b4">INNOVATION</text>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Innovation</h3>
                    <p className="text-gray-600 text-center">We embrace cutting-edge technologies and medical advancements to provide the best possible outcomes for our patients.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
                    <rect width="100" height="100" rx="10" fill="#f8f9fa" stroke="#2c3e50" stroke-width="2"/>
                    
                    <path d="M50 15 L61 40 L88 40 L67 58 L73 85 L50 70 L27 85 L33 58 L12 40 L39 40 Z" 
                            fill="#f1c40f" stroke="#e67e22" stroke-width="1"/>
                    
                    <path d="M20 65 Q50 75 80 65 L80 70 Q50 80 20 70 Z" fill="#e74c3c" opacity="0.9"/>
                    
                    <text x="50" y="90" font-family="Arial" font-size="12" text-anchor="middle" 
                            font-weight="bold" fill="#2c3e50">EXCELLENCE</text>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Excellence</h3>
                    <p className="text-gray-600 text-center">We maintain the highest standards of medical practice, continuously improving our services through education and research.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Exceptional Healthcare?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of satisfied patients who trust LA Hospital for their medical needs.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition duration-300">Book an Appointment</a>
                <a href="#" className="bg-transparent hover:bg-blue-700 text-white border-2 border-white px-8 py-3 rounded-md text-lg font-medium transition duration-300">Contact Us</a>
            </div>
        </div>
    </div>
    </>
    );
};

export default About;