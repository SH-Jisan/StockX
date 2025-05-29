import React , {useState} from 'react';
import styles from './Register.module.css';
import logo from '../../assets/images/Stock_x_logo.png';



const Register = () =>{

    const[form , setForm] = useState({
        name: '',
        lastName: '',
        location: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

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
                <form onSubmit = {handleSubmit}>
                    <div className = {styles.main_container}>

                        <div className = {styles.line}></div>

                        <div className = {styles.logo_container}>
                            <img src={logo} alt='logo'  className={styles.logo} />
                        </div>

                        <div className = {styles.header_container}>
                            <p>Register</p>
                        </div>

                        <div className = {styles.form_container}>
                            <p>Name</p>
                            <input name="name"
                                   value={form.name}
                                   onChange={handleChange}
                                   required>
                            </input>
                            {errors.name && <small>{errors.name}</small>}
                            <p>Last Name</p>
                            <input name = "lastName"
                                   value={form.lastName}
                                   onChange={handleChange}
                                   required>
                            </input>
                            <p>Location</p>
                            <input name = "location"
                                   value={form.location}
                                   onChange={handleChange}>
                            </input>
                            <p>Email</p>
                            <input name = "email"
                                   value={form.email}
                                   onChange={handleChange}
                                   required>
                            </input>
                            {errors.email && <small>{errors.email}</small>}
                            <p>Password</p>
                            <input name = "password"
                                   value={form.password}
                                   onChange={handleChange}
                                   required>
                            </input>
                        </div>

                        <div className = {styles.button_container}>
                            <button className = {styles.button} type = "submit">Submit</button>
                        </div>

                        <div className = {styles.footer_container}>
                            <p>
                                Already A Member?
                            </p>
                        </div>
                    </div>
                </form>
        </>
    );
}

export default Register;