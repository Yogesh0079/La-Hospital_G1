import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { getSessionUser } from "../../scripts/users";



export default function Intro() {
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

  return (
    <div
      className="form-section"
      style={{
        flex: "1 1 400px",
        padding: "30px",
        maxWidth: "600px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Hospital Appointment Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "97%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Department:
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          >
          <option value="">Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Endocrinology">Endocrinology</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Hematology">Hematology</option>
          <option value="Infectious Diseases">Infectious Diseases</option>
          <option value="Nephrology">Nephrology</option>
          <option value="Neurology">Neurology</option>
          <option value="Oncology">Oncology</option>
          <option value="Ophthalmology">Ophthalmology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Radiology">Radiology</option>
          <option value="Rheumatology">Rheumatology</option>
          <option value="Urology">Urology</option>

          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: "97%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
  <label style={{ display: "block", marginBottom: "5px" }}>
    Time Slot:
  </label>
  <select
    name="timeSlot"
    value={formData.timeSlot}
    onChange={handleChange}
    style={{ width: "100%", padding: "8px" }}
    required
  >
    <option value="">Select Time Slot</option>
    <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
    <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
    <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
    <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
  </select>
</div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
