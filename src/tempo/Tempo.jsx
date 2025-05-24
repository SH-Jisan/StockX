import React from "react";
import "./Tempo.module.css";

const Tempo = ({ children, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                {children}
                <button className="close-btn" onClick={onClose}>✕</button>
            </div>
        </div>
    );
};

export default Tempo;
