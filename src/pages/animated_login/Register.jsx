import React, {useEffect, useState} from 'react';
import styles from './Register.module.css';
import {FaEnvelope, FaLock, FaUser} from "react-icons/fa";
import {FaShop} from "react-icons/fa6";
import {motion} from "framer-motion";

const Register = () => {

    const[form , setForm] = useState({
        name: '',
        lastName: '',
        location: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() =>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth <=960);
        };
        handleResize();
        window.addEventListener('resize' , handleResize);

        return () => window.removeEventListener('resize' , handleResize);
    }, []);

    const animationProps = isMobile ?
        {key: 'mobile', initial: {opacity: '0' , y: -40} , animate:{opacity: 1 , y: 0}}
        : {key: 'desktop' , initial: {opacity: '0' , x: 40} , animate:{opacity: 1 , x: 0}}


    const handleChange = (e) => {
        setForm({...form , [e.target.name]: e.target.value});
    };

    const validate = () =>{
        const newErrors = {};
        if(!form.name.trim()) newErrors.name = "";
        if(!form.email.includes('@')) newErrors.email = ""
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            alert('Form submitted successfully!');
        }
    };

    return(
        <>
            <motion.div
                {...animationProps}
                transition={{
                    delay: 0.3,
                    duration: 1,
                    ease: 'easeOut'
                }}>
                <div className={styles.main_container}>
                    <div className={styles.header}>
                        <p><strong>Register to StockX</strong></p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.form_container}>
                        <p>First name</p>
                        <FaUser className={styles.user_icon} />
                        <input type="text" className={styles.input_box} placeholder="John Doe" />

                        <p>Email</p>
                        <FaEnvelope className={styles.mail_icon} />
                        <input type="email" className={styles.input_box} placeholder="example@site.com" />

                        <p>Password</p>
                        <FaLock className={styles.pass_icon} />
                        <input type="password" className={styles.input_box} placeholder="Minimum 8 characters" />

                        <p>Shop name</p>
                        <FaShop className={styles.shop_icon} />
                        <input type="text" className={styles.input_box} placeholder="ABC Shop" />

                    </div>

                    <div className={styles.button_container}>
                        <button>Register</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}


export default Register;