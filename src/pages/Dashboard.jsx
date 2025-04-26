import * as React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Dashboard.css"
import bellIcon from '../assets/bell.854x1024.png';
import searchIcon from '../assets/instagram-search-icon.png';
import { motion } from "framer-motion";
import teamPhoto from '../assets/team.jpg';

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
                        <button className='notification' type='#'><img src={bellIcon} alt="bell icon" /></button>
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
                                        <div className='full-body'></div>
                                        <div className='x-ray'></div>
                                        <div className='blood'></div>
                                    </div>
                                </div>
                                <div className='data'>
                                    <div className='patient-visits'>
                                        <p>PATIENT VISITS</p>
                                        <div className='patient-visits-data'></div>
                                    </div>
                                    <div className='prescriptions'>
                                        <p>LIST OF PRESCRIPTIONS</p>
                                        <div className='prescriptions-data'></div>
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