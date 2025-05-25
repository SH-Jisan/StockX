// src/pages/UserInfo.jsx
import React from 'react';
import styles from './Tempo.module.css';

const Tempo = () => {
    return (
        <div className={styles.userInfo}>
            <h2>User's Information</h2>
            <div className={styles.infoContainer}>
                <div className={styles.infoBox}>
                    <div className={styles.slideText}><strong>First Name:</strong> SH</div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.slideText}><strong>Last Name:</strong> Jisan</div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.slideText}><strong>Shop Name:</strong> ABC</div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.slideText}><strong>Location:</strong> Gopalganj</div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.slideText}><strong>Phone:</strong> 01537284797</div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.slideText}><strong>Email:</strong> shzisun123@gmail.com</div>
                </div>
            </div>
        </div>
    );
};

export default Tempo;
