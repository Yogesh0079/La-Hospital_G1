import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userdetails.css";

const UserDetails = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        department: "",
        last_name: "",
        relation: "",
        address: "",
        contact: "",
        blood_group: "",
        dob: "",
        weight: "",
        height: "",
        new: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/updateUser/${window.location.pathname.split("/").pop()}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        console.log("Form Data Submitted: ", formData);
        navigate("/dashboard");
    };

    return (
        <div className="details-form">
            <h2 className="form-heading">Let's Get to Know You. A bit more..</h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                    <label>First Name:</label>
                    <input
                        className="details-input"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        className="details-input"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        className="details-input"
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Son of/Wife of:</label>
                    <input
                        className="details-input"
                        type="text"
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ gridColumn: "span 2", backgroundColor: "white",}}>
                    <label>Address:</label>
                    <textarea
                        className="details-input"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        className="details-input"
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Blood Group:</label>
                    <input
                        className="details-input"
                        type="text"
                        name="blood_group"
                        value={formData.blood_group}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        className="details-date"
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input
                        className="details-number"
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Height (cm):</label>
                    <input
                        className="details-number"
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ gridColumn: "span 2", textAlign: "center" }}>
                    <button type="submit" className="detailsSubmit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserDetails;
