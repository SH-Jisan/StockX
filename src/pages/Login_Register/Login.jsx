import React , {useState} from 'react';
import logo from '../../assets/images/Stock_x_logo.png'
import styles from './Login.module.css'
import styled from './Register.module.css'
import {toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaEye , FaEyeSlash} from 'react-icons/fa';


const Login = () => {

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);


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
    return(
        <>

            <form onSubmit={handleLogin} noValidate>

                    <div className ={styles.main_container}>
                        <div className = {styles.line}></div>

                        <div className = {styled.logo_container}>
                            <imt src={logo} alt="Logo" className={styled.logo}/>
                        </div>

                        <div className = {styles.header_container}>
                            <p>Login</p>
                        </div>

                        <div className = {styles.form_container}>
                            <p>Email</p>
                            <input type = "email"
                                   className = {styles.input_box}
                                   value = {email}
                                   onChange = {e => setEmail(e.target.value)}
                                   required
                            >
                            </input>
                            <p>Password</p>

                            <div className = {styles.password_container}>
                                <input type = {showPassword ? "text" : "password"}
                                       value = {password}
                                       onChange = {e => setPassword(e.target.value)}
                                       required
                                />
                                <button type = "button" onClick={()=> setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className = {styles.button_container}>
                            <button type="submit">Submit</button>
                            <button > Explore The App</button>
                        </div>

                        <div className = {styles.footer_container}>
                            <p>Not A Member Yet?Register</p>
                        </div>
                    </div>
            </form>
            <ToastContainer position= "top-center" />
        </>
    );
}

export default Login;