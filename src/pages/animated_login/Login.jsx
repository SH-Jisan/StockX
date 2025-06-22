import React, {useState , useEffect} from 'react';
import styles from './Login.module.css';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {toast} from "react-toastify";
import {motion} from 'framer-motion';

const Login = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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
        {key: 'mobile', initial: {opacity: '0' , y: 40} , animate:{opacity: 1 , y: 0}}
        : {key: 'desktop' , initial: {opacity: '0' , x: -40} , animate:{opacity: 1 , x: 0}}

    const handleLogin = (e) => {
        e.preventDefault();

        if(!email.trim()){
            toast.error("Email is required", {
                toastId: 0,
            });
            return;
        }

        if(!password.trim()){
            toast.error("Password is required",{
                toastId: 1,
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            toast.error("Enter A Valid Email Address" ,{
                toastId: 2,
            });
            return;
        }

        toast.success("Form Submitted Successfully" , {
            toastId: 3,
        });
    }


    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <motion.div
                {...animationProps}
                transition={{
                    delay: 0.5,
                    duration: 1,
                    ease: 'easeOut'
                }}>
                <div className={styles.main_container}>
                    <div className={styles.header}>
                        <p><strong>Login to StockX</strong></p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.form_container}>
                        <p>Email</p>
                        <i className={`fas fa-envelope ${styles.email_icon}`}></i>
                        <input type = "email"
                               className = {styles.input_box}
                               placeholder = "example@gmail.com"
                               value = {email}
                               onChange = {e => setEmail(e.target.value)}
                               required
                        >
                        </input>

                        <p>Password</p>
                        <i className={`fas fa-lock ${styles.pass_icon}`}></i>
                        <div className = {styles.password_container}>
                            <input type = {showPassword ? "text" : "password"}
                                   value = {password}
                                   className={styles.input_box}
                                   placeholder = "minimum 8 charecter"
                                   onChange = {e => setPassword(e.target.value)}
                                   required
                            />
                            <button type = "button"
                                    className={styles.showPass_icon}
                                    onClick={()=> setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <div className={styles.footer}>
                                <p>Remember me</p>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    className={styles.check_box}
                                    onChange={handleChange}
                                />
                                <div className={styles.hor_line}></div>
                                <a href="#ki" className={styles.hyper}>Forget Password?</a>
                            </div>
                        </div>

                    </div>

                    <div className={styles.button_container}>
                        <button>Login</button>
                        <button>Explore the products</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Login;