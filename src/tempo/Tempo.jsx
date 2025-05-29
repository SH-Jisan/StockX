// src/components/Landing.jsx
import React from 'react';
import styles from './Tempo.module.css';
import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <div className={styles.landing}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Safe & Trusted Gas Appliances Marketplace
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Buy and sell gas cylinders, stoves & accessories — fast, safe, and hassle-free.
                </motion.p>

                <motion.div
                    className={styles.ctaButtons}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <button className={styles.primaryBtn}>Shop Now</button>
                    <button className={styles.secondaryBtn}>Become a Seller</button>
                </motion.div>
            </section>

            {/* Categories Section */}
            <section className={styles.categories}>
                <h2>Browse by Category</h2>
                <div className={styles.categoryGrid}>
                    <div className={styles.categoryCard}>Gas Cylinders</div>
                    <div className={styles.categoryCard}>Gas Stoves</div>
                    <div className={styles.categoryCard}>Regulators</div>
                    <div className={styles.categoryCard}>Accessories</div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className={styles.whyUs}>
                <h2>Why Choose Us?</h2>
                <div className={styles.features}>
                    <div className={styles.featureCard}>✅ Certified Safety</div>
                    <div className={styles.featureCard}>🚚 Nationwide Delivery</div>
                    <div className={styles.featureCard}>📦 Easy Returns</div>
                    <div className={styles.featureCard}>💬 24/7 Support</div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2025 GasTrade. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
