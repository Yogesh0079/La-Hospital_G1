import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserDetails = (uid) => {
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
        })
        console.log("Form Data Submitted: ", formData);
        navigate("/");
    };

    return (
        <div style={{ marginTop: "400px", backgroundColor: "#1a1a1a",padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>User Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
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
                        type="text"
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
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
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserDetails;