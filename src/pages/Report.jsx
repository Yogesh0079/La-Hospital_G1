import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../styles/Report.css';
import { useNavigate } from "react-router-dom";
import { getSessionUser } from "../scripts/users";

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
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="emr"
      >
        <div className='sidebar'></div>
        <div
        className="scroller"
        >
          <button type="submit" class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          Search
          </button>
        </div>
        <div class="text-editor">
          <div class="editor-content" contenteditable="true" spellcheck="true"></div>
        </div>
        <div class="report-viewer">
          {/*  */}
        </div>
      </motion.div>
    </>
  )
}