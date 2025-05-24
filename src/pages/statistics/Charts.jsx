import React from 'react';
import styles from './Charts.module.css'
import Income_chart from './Income_chart.jsx';
import Expense_chart from "./Expense_chart.jsx";


const Charts = () => {



    return(
        <>
            <div className={styles.main_container}>
                < Income_chart  />
                < Expense_chart  />
            </div>
        </>
    );
};

export default Charts;