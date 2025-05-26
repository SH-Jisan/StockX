// components/Box3.jsx
import React from "react";
import styles from "./Box.module.css";

const Box3 = ({ data, onEdit, onDelete }) => {
    return (
        <div className={styles.card}>
            {data.picture && (
                <img src={data.picture} alt="Profile" className={styles.img} />
            )}
            <h3>{data.name}</h3>
            <p>{data.designation}</p>
            <p>{data.phone}</p>
            <div className={styles.actions}>
                <button onClick={onEdit} className={styles.editBtn}>
                    Edit
                </button>
                <button onClick={onDelete} className={styles.deleteBtn}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Box3;
