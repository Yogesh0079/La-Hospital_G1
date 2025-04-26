import React, { useState, useEffect } from "react";
import '../styles/Report.css';

export default function Report() {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: "",
    department: "",
    date: "",
    number: 1,
  });

    useEffect(() => {
    // 1. Original session user logic
    getSessionUser()
      .then(data => {
        if (data && data.user) {
          if (data.user.new) {
            navigate(`/user/${data.user._id}`, { state: { user: data.user } });
          }
          setFormData(prev => ({
            ...prev,
            name: data.user.first_name + " " + data.user.last_name,
          }));
        }
      });
  
    // 2. Animation fix logic (runs in same effect)
    const cleanupAnimationStyles = () => {
      requestAnimationFrame(() => {
        // Target all motion-controlled elements
        const motionElements = document.querySelectorAll(
          '[motion], .motion-container, .react-select__control, .day'
        );
        
        motionElements.forEach(el => {
          el.style.transform = 'none';
          el.style.transformOrigin = 'center';
          el.style.transformBox = 'fill-box';
        });
      });
    };
  
    cleanupAnimationStyles();
  
    // Optional: Add event listener for dynamic elements
    const handleAnimationFix = () => cleanupAnimationStyles();
    window.addEventListener('load', handleAnimationFix);
  
    return () => {
      window.removeEventListener('load', handleAnimationFix);
    };
  }, [navigate]);

  return (
    <>
      
    </>
  )
}