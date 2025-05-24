// src/components/UserForm.jsx
import React, { useState } from "react";

const UserForm = ({ onSave, requestClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        shopName: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);       // Save data
        requestClose();         // Trigger smooth close from Modal
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
            /><br />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
            /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            /><br />

            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
            /><br />

            <input
                type="text"
                name="shopName"
                placeholder="Shop Name"
                value={formData.shopName}
                onChange={handleChange}
                required
            /><br />

            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
