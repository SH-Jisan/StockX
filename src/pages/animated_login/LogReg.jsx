import React , {useState , useEffect , useLayoutEffect} from 'react';
import styles from './LogReg.module.css';
import Register from './Register.jsx';
import Login from './Login.jsx';
import {AnimatePresence , motion} from 'framer-motion';
import white_logo from './white_logo.png';
import color_logo from './color_logo.png';

const LogReg = () =>{
    const [isRight , setIsRight] = useState(false);
    const [showContent , setShowContent] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 960);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const exitAnim = isMobile
        ? {opacity: 0, y: -50}
        : {opacity: 0, x: -50};

    const toggleSlide = () =>{
        setIsRight(!isRight);
        setShowContent(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true); // mount after delay
        }, 400); // keep this in sync with exit duration
        return () => clearTimeout(timer);
    }, [isRight]);

    return(
        <>
            <div className={styles.mother_container}>
                <div className={styles.main_container}>
                    <div className={styles.blur_box}>

                        <div className={`${styles.slideBox} ${isRight ? styles.right : styles.left}`}>
                            <AnimatePresence  mode ="wait">
                                <motion.div
                                    key={isRight ? 'right-text' : 'left-text'}
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 20}}
                                    transition={{duration: 0.5}}
                                    className={isRight ? styles.right_side : styles.left_side}
                                >
                                    {isRight ? (
                                        <>
                                            <h2>Hello, friend!</h2>
                                            <strong>Already have an account?</strong>
                                        </>
                                    ) : (
                                        <>
                                            <h2>Welcome Back!</h2>
                                            <strong>Don't have an account?</strong>
                                        </>
                                    )}
                                    <br/>
                                    <button className={styles.button} onClick={toggleSlide}>
                                        {isRight ? 'Login' : 'Register'}
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className={`${styles.fixBox} ${isRight ? styles.fleft : styles.fright}`}>
                            <AnimatePresence mode="wait">
                                {showContent && (
                                    <motion.div
                                        key={isRight ? 'register' : 'login'}
                                        exit={exitAnim}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {isRight ? <Register /> : <Login />}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export default LogReg;