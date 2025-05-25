import React , {useState} from 'react';
import styles from './Profile.module.css';
import pro_pic from '../../assets/images/pro_pic.png'
import Employees from './Employees.jsx'
import SH from '../../assets/images/SH.png'
import addemp_ico from '../../assets/images/add_emp.png'
import Popup_modal from "./Popup_modal.jsx";
import Edit_user from './Edit_user.jsx';

const Profile = () => {
    const [user, setUser] = useState({
        firstName: " SH",
        lastName: " Jisan",
        shopName: " abc shop" ,
        email: " shzisun123@gmail.com",
        location: "gopu",
        phoneNumber: "01537284797"
    });

    const [isEditing , setIsEditing] = useState(false);

    const openPopup = () => setIsEditing(true);

    const [employeeList , setEmployeeList] = useState([]);

    const handleAddEmployees = () =>{
        setEmployeeList(prev =>[...prev , {}]);
    }


    return (
        <>
            <div className = {styles.main_container}>
                <div className={styles.userpic_container}>
                    <img className={styles.profile_pic} src={SH} alt="Profile" />
                    <h2>{user.firstName} {user.lastName}</h2>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.user_info}>
                        <h2>User's Information</h2>
                        <div className={styles.global_box}>

                            <div className={styles.info_holder}>
                                <p><strong>First Name: </strong>{user.firstName}</p>
                            </div>
                            <div className={styles.info_holder}>
                                <p><strong>Last Name: </strong>{user.lastName}</p>
                            </div>
                            <div className={styles.info_holder}>
                                <p><strong>Shop Name:</strong>{user.shopName}</p>
                            </div>
                            <div className={styles.info_holder}>
                                <p><strong>Location: </strong>{user.location}</p>
                            </div>
                            <div className={styles.info_holder}>
                                <p><strong>Phone: </strong>{user.phoneNumber}</p>
                            </div>
                            <div className={styles.info_holder}>
                                <p><strong>Email: </strong>{user.email}</p>
                            </div>
                        </div>
                        <div className={styles.button_container}>
                            <button onClick={openPopup}>Edit Profile</button>
                        </div>
                    </div>
                    <div className = {styles.employee_info}>
                        <h2>Employee's Information</h2>
                        <div className={styles.global_box}>

                            <div onClick={handleAddEmployees} className = {styles.addemp_btn}>
                                <img src={addemp_ico} alt="Addemp" />
                            </div>


                            {employeeList.map((_, index)=> (
                                <Employees key={index}/>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    < Popup_modal isOpen={isEditing} onClose={()=> setIsEditing(false)}>
                        {({requestClose})=>(
                            <>
                                <h2>Edit Info</h2>
                                <Edit_user
                                    onSave={(user) =>{
                                        setUser(user);
                                    }}

                                    requestClose={requestClose}
                                    user={user}
                                    />
                            </>
                        )}
                    </Popup_modal>
                </div>
            </div>
        </>
    );
}

export default Profile;