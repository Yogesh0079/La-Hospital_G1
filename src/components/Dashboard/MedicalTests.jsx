import React from "react";
import { useNavigate } from "react-router-dom";

function  FullBodyTest({ testDate }) {
    const navigate = useNavigate();
    return (
        <>
            <a href="#" onClick={() => navigate(`/reports/{reportId}`)}>
            <div className="report-icon" onClick={() => navigate(`/reports/{reportId}`)}>
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
                <div className="report-date">{testDate}</div>
            </div>
            </a>
        </>
    )
}

function XRayTest({testDate}) {
    const navigate = useNavigate();
    return (
        <>
            <a href="#" onClick={() => navigate(`/reports/{reportId}`)}>
            <div className="report-icon" onClick={() => navigate(`/reports/{reportId}`)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="8" r="6"/>
                                                <path d="M8 16v2a4 4 0 0 0 8 0v-2"/>
                                                <line x1="9" y1="10" x2="9.01" y2="10"/>
                                                <line x1="15" y1="10" x2="15.01" y2="10"/>
                                                <path d="M10 14a2 2 0 1 0 4 0"/>
                </svg>
            </div>
            <div className="report-details">
                <div className="report-name">X-Ray</div>
                <div className="report-date">{testDate}</div>
            </div>
            </a>
        </>
    )
}
function BloodTest({testDate}) {
    const navigate = useNavigate();
    return (
        <>
        <a href="#" onClick={() => navigate(`/reports/{reportId}`)}>
            <div className="report-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20"/>
                    <path d="M2 12h20"/>
                    <path d="M2 6h20"/>
                    <path d="M2 18h20"/>
                </svg>
            </div>
            <div className="report-details">
                <div className="report-name">Blood Test</div>
                <div className="report-date">{testDate}</div>
            </div>
        </a>
    </>
    )
}

export {BloodTest, XRayTest, FullBodyTest};