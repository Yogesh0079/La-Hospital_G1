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
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Department:
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Number (1-20):
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            min="1"
            max="20"
            style={{ width: "100%", padding: "8px" }}
            required
          />
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
