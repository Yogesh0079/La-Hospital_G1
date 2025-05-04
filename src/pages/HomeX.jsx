import * as React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/home.css";
import { animateElements } from '../scripts/home.commons';
import CountUp from '../components/animations/CountUp';
import JumpText from '../components/animations/JumpText';
import { useNavigate } from 'react-router-dom';

import {
    faHeartbeat,
    faBrain,
    faBone,
    faBaby,
    faXRay,
    faProcedures,
    faAward,
    faUserMd,
    faHospital,
    faUser,
    faStar,
    faStarHalfAlt,
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

function Home() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.querySelector('#name').value,
            email: e.target.querySelector('#email').value,
            phone: e.target.querySelector('#phone').value,
            subject: e.target.querySelector('#subject').value,
            message: e.target.querySelector('#message').value,
        };
        console.log('Form submitted:', formData);
        // Add actual submission logic here (e.g., API call)
    };
    useEffect(() => {
        animateElements();
    }, []);
    return (
        <>
            <section className="hero-gradient text-white py-20 relative overflow-hidden">
                <div className="hero-pattern"></div>
                <div className="container mx-auto px-6">
                    <div className="hero-content md:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 split-text pb-8">
                            <JumpText loop={true} loopDelay={3000} className="main-heading-text" inputText="An Advanced Hospital Managment System" />
                        </h1>
                        <p className="text-xl mb-8 opacity-90 animate-text">
                            Streamlining healthcare operations for better patient care and efficient hospital administration.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-text delay-1">
                            <a href="#" onClick={() => {navigate("TestResults")}} className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition shadow-lg">
                                Book Appointment
                            </a>
                            <a href="#services" className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition shadow-lg">
                                Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-parallax parallax py-16 text-white">
                <div className="parallax-overlay"></div>
                <div className="parallax-content">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="p-6 animate-text">
                                <div className="text-4xl font-bold text-white mb-2">
                                <CountUp
                                        from={0}
                                        to={150}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />+
                                </div>
                                <div className="text-blue-100">Qualified Doctors</div>
                            </div>
                            <div className="p-6 animate-text delay-1">
                                <div className="text-4xl font-bold text-white mb-2">
                                <CountUp
                                        from={0}
                                        to={250}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />+
                                </div>
                                <div className="text-blue-100">Specialized Clinics</div>
                            </div>
                            <div className="p-6 animate-text delay-2">
                                <div className="text-4xl font-bold text-white mb-2">
                                <CountUp
                                        from={0}
                                        to={10}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />K+
                                </div>
                                <div className="text-blue-100">Happy Patients</div>
                            </div>
                            <div className="p-6 animate-text delay-3">
                                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                                <div className="text-blue-100">Emergency Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-text">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate-text delay-1">Comprehensive healthcare services designed to meet all your medical needs with the highest standards of quality and care.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl testimonial-card animate-text">
                            <div className="feature-icon bg-blue-100 text-blue-600 mx-auto">
                                <FontAwesomeIcon icon={faHeartbeat} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Cardiology</h3>
                            <p className="text-gray-600 text-center">Advanced cardiac care with state-of-the-art diagnostic tools and treatment options for all heart conditions.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl testimonial-card animate-text delay-1">
                            <div className="feature-icon bg-green-100 text-green-600 mx-auto">
                                <FontAwesomeIcon icon={faBrain} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Neurology</h3>
                            <p className="text-gray-600 text-center">Specialized care for disorders of the nervous system with cutting-edge treatment methodologies.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl testimonial-card animate-text delay-2">
                            <div className="feature-icon bg-purple-100 text-purple-600 mx-auto">
                                <FontAwesomeIcon icon={faBone} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Orthopedics</h3>
                            <p className="text-gray-600 text-center">Comprehensive bone and joint care including surgical and non-surgical treatment options.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl testimonial-card animate-text delay-3">
                            <div className="feature-icon bg-yellow-100 text-yellow-600 mx-auto">
                                <FontAwesomeIcon icon={faBaby} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Pediatrics</h3>
                            <p className="text-gray-600 text-center">Specialized healthcare for infants, children, and adolescents with compassionate care.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl testimonial-card animate-text delay-4">
                            <div className="feature-icon bg-red-100 text-red-600 mx-auto">
                                <FontAwesomeIcon icon={faXRay} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Radiology</h3>
                            <p className="text-gray-600 text-center">Advanced imaging services including MRI, CT scans, X-rays, and ultrasound diagnostics.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl testimonial-card animate-text delay-5">
                            <div className="feature-icon bg-indigo-100 text-indigo-600 mx-auto">
                                <FontAwesomeIcon icon={faProcedures} className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Emergency Care</h3>
                            <p className="text-gray-600 text-center">24/7 emergency services with rapid response teams and fully equipped trauma centers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0 animate-text">
                            <img src="https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-2031.jpg" alt="Hospital Building" className="w-full rounded-lg shadow-xl" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-text">About La Hospital</h2>
                            <p className="text-gray-600 mb-6 animate-text delay-1">Founded in 1995, La Hospital has grown to become one of the leading healthcare providers in the region. Our mission is to deliver exceptional patient care through innovation, compassion, and medical excellence.</p>
                            <p className="text-gray-600 mb-6 animate-text delay-2">With over 25 years of experience, we've built a reputation for clinical excellence and patient-centered care. Our team of board-certified physicians and healthcare professionals are dedicated to improving the health and well-being of our community.</p>
                            <div className="flex space-x-4">
                                <div className="bg-blue-100 p-4 rounded-lg animate-text delay-3">
                                    <FontAwesomeIcon icon={faAward} className="text-blue-600 text-2xl mb-2" />
                                    <h4 className="font-bold">Accredited</h4>
                                    <p className="text-sm text-gray-600">JCI Accredited</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg animate-text delay-4">
                                    <FontAwesomeIcon icon={faUserMd} className="text-green-600 text-2xl mb-2" />
                                    <h4 className="font-bold">Experts</h4>
                                    <p className="text-sm text-gray-600">150+ Specialists
                                        </p>
                                </div>
                                <div className="bg-purple-100 p-4 rounded-lg animate-text delay-5">
                                    <FontAwesomeIcon icon={faHospital} className="text-purple-600 text-2xl mb-2" />
                                    <h4 className="font-bold">Facilities</h4>
                                    <p className="text-sm text-gray-600">500+ Beds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-parallax parallax py-20 text-white">
                <div className="parallax-overlay"></div>
                <div className="parallax-content">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4 animate-text">Patient Testimonials</h2>
                            <p className="text-blue-100 max-w-2xl mx-auto animate-text delay-1">Hear what our patients have to say about their experiences at La Hospital.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white bg-opacity-90 p-8 rounded-xl testimonial-card animate-text">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                        <FontAwesomeIcon icon={faUser} className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Robert Johnson</h4>
                                        <div className="flex text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600">"The cardiac care I received was exceptional. The doctors took time to explain my condition and treatment options thoroughly. The follow-up care has been outstanding."</p>
                            </div>

                            <div className="bg-white bg-opacity-90 p-8 rounded-xl testimonial-card animate-text delay-1">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                        <FontAwesomeIcon icon={faUser} className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Maria Garcia</h4>
                                        <div className="flex text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600">"From the moment I walked in, I felt cared for. The nursing staff was attentive and kind. The online patient portal makes managing appointments and test results so easy."</p>
                            </div>

                            <div className="bg-white bg-opacity-90 p-8 rounded-xl testimonial-card animate-text delay-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                        <FontAwesomeIcon icon={faUser} className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">James Wilson</h4>
                                        <div className="flex text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600">"The emergency department handled my situation with speed and professionalism. I was seen immediately and the doctors were very thorough in their examination."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-text">Contact Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate-text delay-1">Have questions or need to schedule an appointment? Reach out to us through any of these channels.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6 animate-text">Get In Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start animate-text delay-1">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Address</h4>
                                        <p className="text-gray-600">123 Medical Drive, Healthville, HV 12345</p>
                                    </div>
                                </div>

                                <div className="flex items-start animate-text delay-2">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Phone</h4>
                                        <p className="text-gray-600">Main: (123) 456-7890</p>
                                        <p className="text-gray-600">Emergency: (123) 456-7891</p>
                                    </div>
                                </div>

                                <div className="flex items-start animate-text delay-3">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email</h4>
                                        <p className="text-gray-600">info@La Hospitalhospital.com</p>
                                        <p className="text-gray-600">appointments@La Hospitalhospital.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 animate-text delay-4">
                                <h4 className="font-bold mb-4">Opening Hours</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-medium">8:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-medium">Emergency Only</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6 animate-text delay-1">Send Us a Message</h3>
                            <div className="space-y-4" onSubmit={handleSubmit}>
                                <div className="animate-text delay-2">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>

                                <div className="animate-text delay-3">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>

                                <div className="animate-text delay-4">
                                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>

                                <div className="animate-text delay-5">
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                    <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">Select a subject</option>
                                        <option value="appointment">Appointment Request</option>
                                        <option value="billing">Billing Inquiry</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="animate-text delay-6">
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>

                                <button type="submit" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-full transition shadow-md animate-text delay-7">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;