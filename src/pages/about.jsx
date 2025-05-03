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
                        <i className="fas fa-user-md"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">250+</h3>
                    <p className="text-gray-600">Specialized Doctors</p>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                    <div className="text-blue-600 text-4xl mb-4">
                        <i className="fas fa-procedures"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
                    <p className="text-gray-600">Hospital Beds</p>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                    <div className="text-blue-600 text-4xl mb-4">
                        <i className="fas fa-heartbeat"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
                    <p className="text-gray-600">Happy Patients</p>
                </div>
                <div className="stat-card bg-white p-8 rounded-lg shadow-md text-center transition duration-300">
                    <div className="text-blue-600 text-4xl mb-4">
                        <i className="fas fa-award"></i>
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
                        <i className="fas fa-arrow-right ml-2"></i>
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
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3" alt="Dr. Sarah Johnson" className="w-full h-80 object-cover" />
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
                        <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3" alt="Dr. Michael Chen" className="w-full h-80 object-cover"/>
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
                        <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3" alt="Dr. Lisa Rodriguez" className="w-full h-80 object-cover"/>
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
                        <img src="https://images.unsplash.com/photo-1582750433441-9ed4b1d7d529?ixlib=rb-4.0.3" alt="Dr. James Wilson" className="w-full h-80 object-cover"/>
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
                    <i className="fas fa-chevron-right ml-2"></i>
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
                        <i className="fas fa-heart text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Compassion</h3>
                    <p className="text-gray-600 text-center">We treat every patient with empathy, kindness, and respect, understanding that healing begins with compassionate care.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-flask text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Innovation</h3>
                    <p className="text-gray-600 text-center">We embrace cutting-edge technologies and medical advancements to provide the best possible outcomes for our patients.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-star text-blue-600 text-2xl"></i>
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