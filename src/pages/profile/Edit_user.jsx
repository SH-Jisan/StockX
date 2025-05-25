// src/components/UserForm.jsx
import React, { useState } from "react";

const Edit_user = ({ onSave, requestClose , user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [location , setLocation] = useState(user.location);
    const [shopName , setShopName] = useState(user.shopName);
    const [profilePic , setProfilePic] = useState(user.profilePic);

    const handleChange = (e) => {
        onSave({firstName , lastName , email, location, shopName , profilePic});
    };

    const handleImageUpload = (event) =>{
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(user);       // Save data
        requestClose();         // Trigger smooth close from Modal
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            /><br />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                required
            /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            /><br />

            <input
                type="text"
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            /><br />

            <input
                type="text"
                name="shopName"
                placeholder="Shop Name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                required
            /><br />

            <button type="submit" onClick={handleChange}>Save</button>
        </form>
    );
};

export default Edit_user;
