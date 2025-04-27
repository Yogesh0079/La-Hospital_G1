import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSessionUser } from "../scripts/users";
import '../styles/Appointment.css';
import { motion } from "framer-motion";
import Select from 'react-select';

export default function Appointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    date: "",
    number: 1,
  });

  // Department options for react-select
  const departmentOptions = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" }
  ];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDepartmentChange = (selectedOption) => {
    setFormData(prev => ({
      ...prev,
      department: selectedOption.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const AppointmentCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 28));
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 3, 28));
    const [selectedTime, setSelectedTime] = useState(null);
  
    const timeSlots = [
      '11:30 AM', '12:30 PM', '1:30 PM',
      '4:30 PM', '5:30 PM', '6:30 PM'
    ];
  
    const navigateMonth = (direction) => {
      setCurrentDate(new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + direction,
        1
      ));
    };
  
    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDay = firstDay.getDay();
      
      const calendar = [];
      let day = 1;
      
      for (let i = 0; i < 5; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < startingDay) {
            week.push(<td key={`empty-${j}`} className="empty"></td>);
          } else if (day > daysInMonth) {
            week.push(<td key={`empty-end-${j}`} className="empty"></td>);
          } else {
            const date = new Date(year, month, day);
            const isSelected = date.toDateString() === selectedDate.toDateString();
            
            week.push(
              <motion.td
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                key={`day-${day}`}
                className={`day ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDateClick(date)}
              >
                {day}
              </motion.td>
            );
            day++;
          }
        }
        calendar.push(<tr key={`week-${i}`}>{week}</tr>);
      }
      return calendar;
    };
  
    const handleDateClick = (date) => {
      setSelectedDate(date);
      setSelectedTime(null);
    };
  
    const handleTimeClick = (time) => {
      setSelectedTime(time);
      setFormData(prev => ({ ...prev, date: `${selectedDate.toDateString()} ${time}` }));
    };
  
    const formatSelectedDate = () => {
      return selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    return (
      <div className="calendar-container">
        <h1>Appointment</h1>
        <div className="calendar-header">
          <button type="button" onClick={() => navigateMonth(-1)}>&lt;</button>
          <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
          <button type="button" onClick={() => navigateMonth(1)}>&gt;</button>
        </div>
        <table className="calendar">
          <thead>
            <tr>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderCalendar()}
          </tbody>
        </table>
        <div className="selected-day">
          <h3>{formatSelectedDate()}</h3>
          <div className="time-slots">
            {[0, 2, 4].map(startIndex => (
              <div key={startIndex} className="time-column">
                {timeSlots.slice(startIndex, startIndex + 2).map(time => (
                  <div 
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="timezone">
          <strong>Asia/Kolkata ({new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
          })})</strong>
        </div>
      </div>
    );
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='appointment-form'
      onSubmit={handleSubmit}
    >
      <h1>Appointment Form</h1>
      <hr />
      
      <div className="name">
        <label>Name</label>
        <motion.div
          className="motion-input-container"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', width: '100%' }} // Inline override
        >
          <input 
            type='text' 
            name="first-name" 
            placeholder="First name"
            value={formData.name.split(' ')[0] || ''}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          className="motion-input-container"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', width: '100%' }} // Inline override
        >
          <input 
            type='text' 
            name="last-name" 
            placeholder="Last name"
            value={formData.name.split(' ')[1] || ''}
            onChange={handleChange}
          />
        </motion.div>
      </div>
      
      <div className="email">
        <label>Email</label>
        <motion.div
          className="motion-input-container"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', width: '100%' }} // Inline override
        >
          <input 
            type='email' 
            name='email' 
            placeholder='abcdef@example.com'
            onChange={handleChange}
          />
        </motion.div>
      </div>
      
      <div className="phone-number">
        <label>Phone Number</label>
        <motion.div
          className="motion-input-container"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', width: '100%' }} // Inline override
        >
          <input 
            type="tel" 
            name="phone-number" 
            placeholder="XXXXX-XXXXXX"
            onChange={handleChange}
          />
        </motion.div>
      </div>
      
      <div className="contact-preference">
        <label>Contact Preferences</label>
        <div className="via-email">
          <motion.div
            className='.moion-container' 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block', width: '100%' }} // Inline override
          >
            <input 
              type='radio' 
              name='contact-preferences' 
              value='email'
              onChange={handleChange}
            />
          </motion.div>
          <label>Via Email</label>
        </div>
        <div className="via-phone">
          <motion.div
            className='.moion-container' 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block', width: '100%' }} // Inline override
          >
            <input 
              type='radio' 
              name='contact-preferences' 
              value='phone'
              onChange={handleChange}
            />
          </motion.div>
          <label>Via Phone</label>
        </div>
      </div>
      
      <div className="department">
        <label>Which medical department do you want to make an appointment for?</label>
        <motion.div
          className="motion-input-container"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', width: '100%' }} // Inline override
        >
          <Select
            options={departmentOptions}
            onChange={handleDepartmentChange}
            isSearchable
            placeholder="Search or select department..."
            className="react-select-container"
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            menuPosition="fixed"
            styles={{
              control: (base) => ({
                ...base,
                transform: 'none !important', // Double protection
                cursor: 'pointer',
              })
            }}
          />
        </motion.div>
      </div>
      
      <AppointmentCalendar />
      
      <motion.div
        className='.motion-input-container'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ display: 'inline-block', width: '100%' }} // Inline override
      >
        <button type="submit" className="submit-btn">Book Appointment</button>
      </motion.div>
    </motion.form>
  );
}