import React , {useState} from 'react';
import styles from './Profile.module.css';
import pro_pic from '../../assets/images/pro_pic.png'
import Employees from './Employees.jsx'
import SH from '../../assets/images/SH.png'
import addemp_ico from '../../assets/images/add_emp.png'

const Profile = () => {

    const [employeeList , setEmployeeList] = useState([]);

    const handleAddEmployees = () =>{
        setEmployeeList(prev =>[...prev , {}]);
    }


    return (
        <>
            <div className = {styles.main_container}>
                <div className={styles.userpic_container}>
                    <img className={styles.profile_pic} src={SH} alt="Profile" />
                    <h2>SH Jisan</h2>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.user_info}>
                        <h2>User's Information</h2>
                        <div className={styles.global_box}>

                            <div className={styles.info_holder}>
                                <strong>First Name:</strong>
                                <p>SH</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>Last Name:</strong>
                                <p>Jisan</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>Shop Name:</strong>
                                <p>ABC</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>Location:</strong>
                                <p>Gopalganj</p>
                            </div>
                            <div className={styles.info_holder}>
                                <p><strong>Phone: </strong>01537284797</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>Email:</strong>
                                <p>shzisun123@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.button_container}>
                            <button type="submit">Edit Profile</button>
                        </div>
                    </div>
                    <div className = {styles.employee_info}>
                        <h2>Employee's Information</h2>
                        <div className={styles.global_box}>

                            <div onClick={handleAddEmployees} className = {styles.addemp_btn}>
                                <img src={addemp_ico} alt="Addemp" />
                            </div>

                            <Employees />
                            <Employees />
                            <Employees />

                            {employeeList.map((_, index)=> (
                                <Employees key={index}/>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;