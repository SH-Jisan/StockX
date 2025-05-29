import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import logoImage from '../../assets/images/Stock_x_logo.png'; // same logo image

const navVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const Navbar = () => {
    return (
        <motion.nav
            className={styles.navbar}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
        >
            {/* Logo positioned in navbar left */}
            <div className={styles.logo} />

            <ul className={styles.menu}>
                <li className={styles.menuItem}>Contact</li>
                <li className={styles.menuItem}>Shop</li>
                <li className={styles.menuItem}>About</li>
            </ul>

            <button className={styles.loginBtn}>Login</button>
        </motion.nav>
    );
};

export default Navbar;
