import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Landing.module.css';
import Navbar from './Navbar';
import logoImage from '../../assets/images/Stock_x_logo.png'; // apnar logo image path

const Landing = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Logo animation */}
            <motion.img
                src={logoImage}
                alt="Logo"
                className={styles.logo}
                initial={{
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    position: 'fixed',
                    scale: 1,
                    zIndex: 1500,
                }}
                animate={
                    animationComplete
                        ? {
                            top: -146,       // navbar er padding er moto distance
                            left: -200,      // navbar er left padding er moto distance
                            x: 0,
                            y: 0,
                            scale: 0.18,
                            position: 'fixed',
                        }
                        : {}
                }
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Navbar animation */}
            <AnimatePresence>
                {animationComplete && <Navbar />}
            </AnimatePresence>
        </>
    );
};

export default Landing;
