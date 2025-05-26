// components/Box1.jsx
import React, { useState } from "react";
import styles from "./Box.module.css";
import Box2 from "./Box2";
import Box3 from "./Box3";

const Box1 = () => {
    const [boxList, setBoxList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddClick = () => {
        setEditingIndex(null); // new form
        setShowForm(true);
    };

    const handleSubmit = (formData) => {
        if (editingIndex !== null) {
            // Edit existing
            const updatedList = [...boxList];
            updatedList[editingIndex] = formData;
            setBoxList(updatedList);
        } else {
            // Add new
            setBoxList([...boxList, formData]);
        }
        setShowForm(false);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleDelete = (index) => {
        const updatedList = [...boxList];
        updatedList.splice(index, 1);
        setBoxList(updatedList);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleAddClick} className={styles.addButton}>
                Add Box
            </button>

            {showForm && (
                <Box2
                    onSubmit={handleSubmit}
                    defaultData={editingIndex !== null ? boxList[editingIndex] : null}
                />
            )}

            <div className={styles.boxList}>
                {boxList.map((item, index) => (
                    <Box3
                        key={index}
                        data={item}
                        onEdit={() => handleEdit(index)}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Box1;
