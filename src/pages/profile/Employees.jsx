import React from 'react';
import styles from './Employees.module.css';
import employees_pic from '../../assets/images/employee_pic.png';

const Employees = () =>{
    return (
        <>
            <div className = {styles.employee_box}>
                <div className = {styles.img_box}>
                    <img src = {employees_pic} alt = "employee pic" className = {styles.employee_pic}/>
                </div>
                <div className ={styles.empInfo_box}>
                    <p><strong>Name: </strong> Sakib</p>
                    <p><strong>Designation: </strong> Driver</p>
                    <p><strong>Phone:</strong>01537284797</p>
                </div>
                <div className = {styles.empButton_container}>
                    <button type = "submit" className={styles.edit_btn}>Edit</button>
                    <button type = 'submit' className={styles.remove_btn}>Remove</button>
                </div>
            </div>
        </>
    );
}

export default Employees;