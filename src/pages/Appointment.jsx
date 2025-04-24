import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { getSessionUser } from "../scripts/users";
import '../styles/Appointment.css';


export default function Appointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    date: "",
    number: 1,
  });
  getSessionUser()
        .then(data => {
          console.log(data)
          if (data.user) {
            if (data.user.new) {
              navigate(`/user/${data.user._id}`, { state: { user: data.user } });
            }
            console.log('Authenticated:', data.user);
            setFormData({
              ...formData,
              name: data.user.first_name + " " + data.user.last_name,
            });
          } else {
            console.log('Not authenticated');
          }
        });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const formControlStyle = {
    margin: "20px",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  };
  
  const formLabelStyle = {
    color: "#1976d2",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "16px"
  };
  
  const radioGroupStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "16px"
  };
  
  const radioLabelStyle = {
    color: "rgba(0, 0, 0, 0.6)"
  };

  const h1 = {
    margin: "1rem"
    
  };

  return (
    <>
    <h1 style={h1}>Patient Appointment Form</h1>
    <FormControl style={formControlStyle}>
    <FormLabel style={formLabelStyle}>Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            style={radioGroupStyle}
        >
            <FormControlLabel 
            value="female" 
            control={<Radio />} 
            label="Female" 
            style={radioLabelStyle}
            />
            {/* ... other options ... */}
        </RadioGroup>
    </FormControl>
    </>
  );
}
