import * as React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Dashboard.css"
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { getUserByLocalId } from "../scripts/users.js";
import { getSessionUser } from '../scripts/users.js';
import { BloodTest, FullBodyTest, XRayTest } from '../components/Dashboard/MedicalTests.jsx';

function Dashboard() {
    const navigate = useNavigate();
    const [isUserDataVisible, setIsUserDataVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [userData, setUserData] = useState({
        "_id": "ObjectId('6816ec779e249c391b17e24d')",
        "new": true,
        "oauth_id": null,
        "password": "hashed_password_sample",
        "first_name": "Angela",
        "last_name": "Martin",
        "email": "angela.martin@example.com",
        "contact": "+1 234 567 8901",
        "emergency_contact": {
          "name": "Dwight Schrute",
          "number": "+1 345 678 9012",
          "relation": "Colleague"
        },
        "address": "1725 Slough Avenue, Scranton, PA",
        "user_type": 1,
        "photo": "angela_profile.jpg",
        "records": [102, 106, 113],
        "appontments": [206, 211],
        "staff_info": null,
        "medical_data": {
          "blood_group": "O+",
          "height": 158,
          "weight": 54,
          "dob": "ISODate('1981-06-25T08:30:00.000Z')",
          "allergies": ["Cats", "Penicillin"],
          "current_medications": [302],
          "reports": [
            {
              "test_id": 402,
              "date": "ISODate('2024-04-15T08:30:00.000Z')",
              "results": {
                "hemoglobin": 13.0,
                "blood_sugar": 90
              },
              "remarks": "All vitals within normal range.",
              "_id": "ObjectId('6816ec779e249c391b17e24e')"
            }
          ]
        },
        "cartData": [],
        "__v": 0
      }
      );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1386);
            // On larger screens, always show user data
            if (window.innerWidth > 1386) {
                setIsUserDataVisible(true);
            }
        };
         getSessionUser()
           .then(data => {
             if (data && data.user) {
               if (data.user.new) {
                 navigate(`/userData/`);
               }
                setUserData(data);
             }
           });
           getUserByLocalId()
            .then(data => {
                if (data && data.user) {
                    if (data.user.new) {
                        navigate(`/userData/`);
                    }
                    setUserData(data);
                }
                console.log(data);
            })
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
                <div className='sidebar'>
                    <div className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </div>
                </div>
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
                                <p>ACTIONS</p>
                                <div className='vitals-main'>
                                    <div className='vitals-direction'>
                                        <div className='direction1'>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Book an appointment</motion.div>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Book a test</motion.div>
                                        </div>
                                        <div className='direction2'>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Emergency OPD</motion.div>
                                            <motion.div whileHover={{ scale: 1.02, color: 'white', backgroundColor: '#00b082' }} style={{ backgroundColor: '#F8F8FF' }} className='vital1'>Previous Appointments</motion.div>
                                        </div>
                                    </div>
                                    <div className='graph'></div>
                                </div>
                                <div className='reports-and-tests'>
                                    <p>MY REQUESTED REPORTS AND TESTS</p>
                                    <div className='repotest'>
                                        <div className='full-body'>
                                            <FullBodyTest />
                                        </div>
                                        <div className='x-ray'>
                                            <XRayTest />
                                        </div>
                                        <div className='blood'>
                                            <BloodTest />
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
                                    <h2>{userData.first_name + " " +  userData.last_name}</h2>
                                    <p>7006-101-6884</p>
                                    </div>
                                    <div className="patient-actions">
                                    <motion.button onClick={() => {navigate('/userDetails')}} whileHover={{ scale: 1.08 }} className="action-btn">Update</motion.button>
                                    <motion.button onClick={() => {navigate('/shareUser')}}whileHover={{ scale: 1.08 }} className="action-btn">Share</motion.button>
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
                                    <span className="detail-value">{userData.gender}</span>
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
                                    <span className="detail-value">{userData.medical_data.blood_group}</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Height (m)</span>
                                    <span className="detail-value">{userData.medical_data.height}</span>
                                    </div>
                                    <div className="detail-row">
                                    <span className="detail-label">Weight (kg)</span>
                                    <span className="detail-value">{userData.medical_data.weight}</span>
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