// components/Box2.jsx
import React, { useState, useEffect } from "react";
import styles from "./Box.module.css";

const Box2 = ({ onSubmit, defaultData }) => {
    const [formData, setFormData] = useState({
        picture: "",
        name: "",
        designation: "",
        phone: "",
    });

    useEffect(() => {
        if (defaultData) {
            setFormData(defaultData);
        }
    }, [defaultData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "picture") {
            const file = files[0];
            const imageURL = URL.createObjectURL(file);
            setFormData({ ...formData, picture: imageURL });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="file"
                name="picture"
                accept="image/*"
                onChange={handleChange}
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Box2;
