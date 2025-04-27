import * as React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Dashboard.css"
import searchIcon from '../assets/instagram-search-icon.png';
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
                        <button className='search-button'><img src={searchIcon} alt="search" /></button>
                        <input className='search-area' type='text' placeholder='Search..'></input>
                        <button className='user' onClick={toggleUserData}></button>
                        <button className='notification' type='#'>
                        <svg class="notification-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" stroke-width="2">
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
                                            <div class="report-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M8 14c0 1.5 1 3 3 3 2 0 3-1.5 3-3 0-2-1-3-3-3s-3 1.5-3 3z" fill="none" stroke="#00008B" stroke-width="1.5"/>
                                                <path d="M14 8c0-1.5-1-3-3-3-2 0-3 1.5-3 3 0 2 1 3 3 3s3-1.5 3-3z" fill="none" stroke="#00008B" stroke-width="1.5"/>
                                                <path d="M8 14l-3 3c-1 1-1 3 0 4s3 1 4 0l3-3M14 8l3-3c1-1 1-3 0-4s-3-1-4 0l-3 3" stroke="#00008B" stroke-width="1.5"/>
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M7 14c0 1.5.5 3 2 3 1.5 0 2-1.5 2-3 0-2-.5-3-2-3s-2 1.5-2 3zM13 8c0-1.5-.5-3-2-3-1.5 0-2 1.5-2 3 0 2 .5 3 2 3s2-1.5 2-3z" fill="none" stroke="#00008B" stroke-width="1.5"/>
                                                <path d="M7 14l-2 2c-1 1-1 3 0 4s3 1 4 0l2-2M13 8l2-2c1-1 1-3 0-4s-3-1-4 0l-2 2M15 16c0 1.5.5 3 2 3 1.5 0 2-1.5 2-3 0-2-.5-3-2-3s-2 1.5-2 3zM21 10c0-1.5-.5-3-2-3-1.5 0-2 1.5-2 3 0 2 .5 3 2 3s2-1.5 2-3z" fill="none" stroke="#00008B" stroke-width="1.5"/>
                                                <path d="M15 16l-2 2c-1 1-1 3 0 4s3 1 4 0l2-2M21 10l2-2c1-1 1-3 0-4s-3-1-4 0l-2 2" stroke="#00008B" stroke-width="1.5"/>
                                                </svg>
                                            </div>
                                            <div class="report-details">
                                                <div class="report-name">Full Body</div>
                                                <div class="report-date">July 20, 2019</div>
                                            </div>
                                        </div>
                                        <div className='x-ray'>
                                        <div class="report-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="8" r="6"/>
                                            <path d="M8 16v2a4 4 0 0 0 8 0v-2"/>
                                            <line x1="9" y1="10" x2="9.01" y2="10"/>
                                            <line x1="15" y1="10" x2="15.01" y2="10"/>
                                            <path d="M10 14a2 2 0 1 0 4 0"/>
                                        </svg>
                                        </div>
                                        <div class="report-details">
                                            <div class="report-name">X–Ray Scan</div>
                                            <div class="report-date">April 30, 2019</div>
                                        </div>
                                        </div>
                                        <div className='blood'>
                                        <div class="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" stroke-width="2">
                                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke-linejoin="round"/>
                                                <path d="M12 8v4" stroke-linecap="round"/>
                                            </svg>
                                            </div>
                                        <div class="report-details">
                                            <div class="report-name">Blood Test</div>
                                            <div class="report-date">February 02, 2019</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='data'>
                                    <div className='patient-visits'>
                                        <p>PATIENT VISITS</p>
                                        <div class="visit-card">
                                            <div class="visit-info">
                                                <div class="doctor-name">Dr. Kiera Knight</div>
                                                    <div class="visit-date">July 20, 2019</div>
                                                    </div>
                                                <div class="visit-meta">
                                                <span class="specialty">Physician</span>
                                                <motion.button whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }} class="view-btn">View</motion.button>
                                            </div>
                                        </div>

                                        <div class="visit-card">
                                            <div class="visit-info">
                                                <div class="doctor-name">Dr. Bruce Williams</div>
                                                    <div class="visit-date">May 01, 2019</div>
                                                    </div>
                                                <div class="visit-meta">
                                                <span class="specialty">Orthopaedist</span>
                                                <motion.button whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }} class="view-btn">View</motion.button>
                                            </div>
                                        </div>

                                        <div class="visit-card">
                                            <div class="visit-info">
                                                <div class="doctor-name">Dr. Kate Summers</div>
                                                    <div class="visit-date">March 18, 2019</div>
                                                    </div>
                                                    <div class="visit-meta">
                                                <span class="specialty">Dentist</span>
                                                <motion.button whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }} class="view-btn">View</motion.button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prescriptions'>
                                        <p>LIST OF PRESCRIPTIONS</p>
                                        <div class="add-prescription">
                                            <motion.button class="add-prescription-button" whileHover={{ border: 0 , scale: 1.02 }} whileTap={{ scale: 0.98 }}>Add A Prescription</motion.button>
                                        </div>

                                        <div class="medication-section">
                                            <h3>MEDICATION</h3>
                                            <ul class="medication-list">
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

                                        <div class="past-months-section">
                                            <h3>PAST 9 MONTHS</h3>
                                            <div class="duration-items">
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
                                <div class="patient-header">
                                    <div class="patient-name-id">
                                    <h2>Angela Martin</h2>
                                    <p>7006-101-6884</p>
                                    </div>
                                    <div class="patient-actions">
                                    <motion.button whileHover={{ scale: 1.08 }} class="action-btn">Update</motion.button>
                                    <motion.button whileHover={{ scale: 1.08 }} class="action-btn">Share</motion.button>
                                    </div>
                                </div>

                                <div class="section-title">DETAILS</div>

                                <div class="patient-details">
                                    <div class="detail-row">
                                    <span class="detail-label">Age</span>
                                    <span class="detail-value">27</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">Gender</span>
                                    <span class="detail-value">Female</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">Marital Status</span>
                                    <span class="detail-value">Single</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">Children</span>
                                    <span class="detail-value">Nil</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">Blood Group</span>
                                    <span class="detail-value">O+</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">Height (m)</span>
                                    <span class="detail-value">1.78</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">Weight (kg)</span>
                                    <span class="detail-value">65</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">BMI (kg/m2)</span>
                                    <span class="detail-value">20.5</span>
                                    </div>
                                    <div class="detail-row">
                                    <span class="detail-label">BF Percentage</span>
                                    <span class="detail-value">27%</span>
                                    </div>
                                </div>

                                <div class="section-title">ALLERGIES</div>

                                <div class="allergies-list">
                                    <div class="allergy-item">• Eggs</div>
                                    <div class="allergy-item">• Peanuts</div>
                                    <div class="allergy-item">• Dust</div>
                                    <div class="allergy-item">• Pollen</div>
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