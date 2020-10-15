import React from 'react';
import styles from './ToppingCard.module.css';

const toppingCard = () => (
    <div className={styles.ToppingCard}>
        <div className={styles.Top} >
            <h2>TITLE</h2>
            <p>PRICE</p>
        </div>
        <p className={styles.Bottom}>250 cal</p>

    </div>
);

export default toppingCard;