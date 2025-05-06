import * as React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Dashboard.css"
import { motion } from "framer-motion";


function Dashboard() {
    const [isUserDataVisible, setIsUserDataVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1386);
            // On larger screens, always show user data
            if (window.innerWidth > 1386) {
                setIsUserDataVisible(true);
            }
        };

        // Initial check
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleUserData = () => {
        setIsUserDataVisible(!isUserDataVisible);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='dashboard'
            >
                <div className='sidebar'></div>
                <div className='dashboard-content'>
                    <div className='search'>
                        <button className='search-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                        </button>
                        <input className='search-area' type='text' placeholder='Search..'></input>
                        <button className='user' onClick={toggleUserData}></button>
                        <button className='notification' type='#'>
                        <svg className="notification-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            <circle cx="18" cy="6" r="3" fill="#ff4d4f">
                                <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                            </circle>
                        </svg>
                        </button>
                    </div>
                    <div className='content'>
                        <div className='main'>
                            <div className='vitals'>
                                <p>VITALS</p>
                                <div className='vitals-main'>
                                    <div className='vitals-direction'>
                                        <div className='direction1'>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Body Temp</motion.div>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Pulse</motion.div>
                                        </div>
                                        <div className='direction2'>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Blood Pressure</motion.div>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Breathing Rate</motion.div>
                                        </div>
                                    </div>
                                    <div className='graph'></div>
                                </div>
                                <div className='reports-and-tests'>
                                    <p>MY REQUESTED REPORTS AND TESTS</p>
                                    <div className='repotest'>
                                        <div className='full-body'>
                                            <div className="report-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M8 14c0 1.5 1 3 3 3 2 0 3-1.5 3-3 0-2-1-3-3-3s-3 1.5-3 3z" fill="none" stroke="#00008B" strokeWidth="1.5"/>
                                                <path d="M14 8c0-1.5-1-3-3-3-2 0-3 1.5-3 3 0 2 1 3 3 3s3-1.5 3-3z" fill="none" stroke="#00008B" strokeWidth="1.5"/>
                                                <path d="M8 14l-3 3c-1 1-1 3 0 4s3 1 4 0l3-3M14 8l3-3c1-1 1-3 0-4s-3-1-4 0l-3 3" stroke="#00008B" strokeWidth="1.5"/>
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M7 14c0 1.5.5 3 2 3 1.5 0 2-1.5 2-3 0-2-.5-3-2-3s-2 1.5-2 3zM13 8c0-1.5-.5-3-2-3-1.5 0-2 1.5-2 3 0 2 .5 3 2 3s2-1.5 2-3z" fill="none" stroke="#00008B" strokeWidth="1.5"/>
                                                <path d="M7 14l-2 2c-1 1-1 3 0 4s3 1 4 0l2-2M13 8l2-2c1-1 1-3 0-4s-3-1-4 0l-2 2M15 16c0 1.5.5 3 2 3 1.5 0 2-1.5 2-3 0-2-.5-3-2-3s-2 1.5-2 3zM21 10c0-1.5-.5-3-2-3-1.5 0-2 1.5-2 3 0 2 .5 3 2 3s2-1.5 2-3z" fill="none" stroke="#00008B" strokeWidth="1.5"/>
                                                <path d="M15 16l-2 2c-1 1-1 3 0 4s3 1 4 0l2-2M21 10l2-2c1-1 1-3 0-4s-3-1-4 0l-2 2" stroke="#00008B" strokeWidth="1.5"/>
                                                </svg>
                                            </div>
                                            <div className="report-details">
                                                <div className="report-name">Full Body</div>
                                                <div className="report-date">July 20, 2019</div>
                                            </div>
                                        </div>
                                        <div className='x-ray'>
                                        <div className="report-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="6"/>
                                            <path d="M8 16v2a4 4 0 0 0 8 0v-2"/>
                                            <line x1="9" y1="10" x2="9.01" y2="10"/>
                                            <line x1="15" y1="10" x2="15.01" y2="10"/>
                                            <path d="M10 14a2 2 0 1 0 4 0"/>
                                        </svg>
                                        </div>
                                        <div className="report-details">
                                            <div className="report-name">X–Ray Scan</div>
                                            <div className="report-date">April 30, 2019</div>
                                        </div>
                                        </div>
                                        <div className='blood'>
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2">
                                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinejoin="round"/>
                                                <path d="M12 8v4" strokeLinecap="round"/>
                                            </svg>
                                            </div>
                                        <div className="report-details">
                                            <div className="report-name">Blood Test</div>
                                            <div className="report-date">February 02, 2019</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='data'>
                                    <div className='patient-visits'>
                                        <p>PATIENT VISITS</p>
                                        <div className="visit-card">
                                            <div className="visit-info">
                                                <div className="doctor-name">Dr. Kiera Knight</div>
                                                    <div className="visit-date">July 20, 2019</div>
                                                    </div>
                                                <div className="visit-meta">
                                                <span className="specialty">Physician</span>
                                                <motion.button whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }} className="view-btn">View</motion.button>
                                            </div>
                                        </div>

                                        <div className="visit-card">
                                            <div className="visit-info">
                                                <div className="doctor-name">Dr. Bruce Williams</div>
                                                    <div className="visit-date">May 01, 2019</div>
                                                    </div>
                                                <div className="visit-meta">
                                                <span className="specialty">Orthopaedist</span>
                                                <motion.button whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }} className="view-btn">View</motion.button>
                                            </div>
                                        </div>

                                        <div className="visit-card">
                                            <div className="visit-info">
                                                <div className="doctor-name">Dr. Kate Summers</div>
                                                    <div className="visit-date">March 18, 2019</div>
                                                    </div>
                                                    <div className="visit-meta">
                                                <span className="specialty">Dentist</span>
                                                <motion.button whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }} className="view-btn">View</motion.button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prescriptions'>
                                        <p>LIST OF PRESCRIPTIONS</p>
                                        <div className="add-prescription">
                                            <motion.button className="add-prescription-button" whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }}>Add A Prescription</motion.button>
                                        </div>

                                        <div className="medication-section">
                                            <h3>MEDICATION</h3>
                                            <ul className="medication-list">
                                            <li>
                                                <strong>Naecelear Spray</strong>
                                                <span>July 20, 2019</span>
                                            </li>
                                            <li>
                                                <strong>Vicadin</strong>
                                                <span>May 01, 2018</span>
                                            </li>
                                            </ul>
                                        </div>

                                        <div className="past-months-section">
                                            <h3>PAST 9 MONTHS</h3>
                                            <div className="duration-items">
                                            <span>7 days</span>
                                            <span>10 days</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isMobile && (
                            <div className={`overlay ${isUserDataVisible ? 'active' : ''}`} onClick={toggleUserData} />
                        )}
                        <motion.div
                            className='user-data'
                            initial={{ x: isMobile ? '100%' : 0 }}
                            animate={{ x: isUserDataVisible ? 0 : '100%' }}
                            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                        >
                            <div className='patient-user-data'>
                                <div className="patient-header">
                                    <div className="patient-name-id">
                                    <h2>Angela Martin</h2>
                                    <p>7006-101-6884</p>
                                    </div>
                                    <div className="patient-actions">
                                    <motion.button whileHover={{ scale: 1.08 }} className="action-btn">Update</motion.button>
                                    <motion.button whileHover={{ scale: 1.08 }} className="action-btn">Share</motion.button>
                                    </div>
                                </div>

                                <div className="section-title">DETAILS</div>

                                <div className="patient-details">
                                    <div className="detail-row">
                                    <span className="detail-label">Age</span>
                                    <span className="detail-value">27</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Gender</span>
                                    <span className="detail-value">Female</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Marital Status</span>
                                    <span className="detail-value">Single</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Children</span>
                                    <span className="detail-value">Nil</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Blood Group</span>
                                    <span className="detail-value">O+</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Height (m)</span>
                                    <span className="detail-value">1.78</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Weight (kg)</span>
                                    <span className="detail-value">65</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">BMI (kg/m2)</span>
                                    <span className="detail-value">20.5</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">BF Percentage</span>
                                    <span className="detail-value">27%</span>
                                    </div>
                                </div>

                                <div className="section-title">ALLERGIES</div>

                                <div className="allergies-list">
                                    <div className="allergy-item">• Eggs</div>
                                    <div className="allergy-item">• Peanuts</div>
                                    <div className="allergy-item">• Dust</div>
                                    <div className="allergy-item">• Pollen</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Dashboard;