// src/components/UserInfo.jsx
import React from "react";

const UserInfo = ({ user }) => {
    if (!user) return <p>No user data saved yet.</p>;

    return (
        <div style={{ marginTop: "30px", textAlign: "left" }}>
            <h3>User Information</h3>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Shop Name:</strong> {user.shopName}</p>
        </div>
    );
};

export default UserInfo;
