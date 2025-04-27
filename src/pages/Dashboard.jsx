import * as React from 'react';
import "../styles/Dashboard.css"
import bellIcon from '../assets/bell.854x1024.png';
import searchIcon from '../assets/instagram-search-icon.png';
import About from './about';


function Dashboard() {
    return (
        <>
        <div className='dashboard'>
            <div className='sidebar'>

            </div>
            <div className='dashboard-content'>
                <div className='search'>
                    <button className='search-button'><img src={searchIcon}></img></button>
                    <input className='search-area' type='text' placeholder='Search..'></input>
                    <button className='user'></button>
                    <button className='notification' type='#'><img src={bellIcon} alt="bell icon" /></button>
                </div>
                <div className='main'>
                    <div className='vitals'>
                        <p>VITALS</p>
                        <div className='vitals-main'>
                            <div className='vitals-direction'>
                                <div className='direction1'>
                                    <div className='vital1'>Body Temp</div>
                                    <div className='vital1'>Pulse</div>
                                </div>
                                <div className='direction2'>
                                    <div className='vital1'>Blood Pressure</div>
                                    <div className='vital1'>Breathing Rate</div>
                                </div>
                            </div>
                            <div className='graph'>
                            </div>
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
                    <div className='user-data'>
                        <p>USER DETAILS</p>
                        <div className='patient-user-data'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }

export default Dashboard