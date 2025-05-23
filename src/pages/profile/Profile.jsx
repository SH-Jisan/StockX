import React from 'react';
import styles from './Profile.module.css';
import pro_pic from '../../assets/images/pro_pic.png'
const Profile = () => {
    return (
        <>
            <div className = {styles.main_container}>
                <div className={styles.userpic_container}>
                    <img className={styles.profile_pic} src={pro_pic} alt="Profile" />
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
                                <strong>First Name:</strong>
                                <p>SH</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>First Name:</strong>
                                <p>SH</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>Shop Name:</strong>
                                <p>ABC</p>
                            </div>
                            <div className={styles.info_holder}>
                                <strong>Location:</strong>
                                <p>Gopalganj</p>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.employee_info}>
                        <h2>Employee's Information</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;