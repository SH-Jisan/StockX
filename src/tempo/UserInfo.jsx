// src/components/UserInfo.jsx
import React, {useState} from "react";
import Tempo from "./Tempo";
import UserForm from "./UserForm.jsx";

const UserInfo = () => {
    const [user, setUser] = useState({
        firstName: " SH",
        lastName: " Jisan",
        shopName: " abc shop" ,
        email: " shzisun123@gmail.com",
        location: "gopu"
    });

    const [isEditing , setIsEditing] = useState(false);


    const openModal = () => setIsEditing(true);

    return (
        <>
        <div style={{ marginTop: "30px", textAlign: "left" }}>
            <h3>User Information</h3>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Shop Name:</strong> {user.shopName}</p>

            <button onClick={openModal}>Edit Profile</button>
        </div>
            <div style={{padding: "50px" , textAlign: "center"}}>
                <Tempo isOpen={isEditing} onClose={()=> setIsEditing(false)}>
                    {({requestClose})=>(
                        <>
                            <h2>Enter User Info</h2>
                            <UserForm
                                onSave = {(formData) =>{
                                    setUser(formData);
                                }}

                                requestClose={requestClose}
                                user={user}
                            />
                        </>
                    )}
                </Tempo>
            </div>
        </>
    );
};

export default UserInfo;
