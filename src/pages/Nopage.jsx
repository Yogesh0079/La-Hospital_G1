import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoPage() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div style={{
            backgroundColor: 'black',
            color: 'white',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1>404 - Page Not Found</h1>
            <button
                onClick={goToHome}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                Go Back to Home
            </button>
        </div>
    );
}

export default NoPage;