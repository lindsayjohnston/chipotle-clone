import React from 'react';
import Button from '../Button/Button';
import logo from '../Assets/burrito-logo.jpg';
import styles from './LoyaltyContainer.module.css';

const buttonContent=<h3>CREATE AN ACCOUNT</h3>;

const loyaltyContainer= (props)=>(
    <div className={styles.LoyaltyContainer}>
        <img alt="burrito-logo" src={logo}></img>
        <h3 className={styles.FirstText}>JOIN BURRITO REWARDS. UNWRAP SOME FREE BURRITO.</h3>
        <Button
            style={styles.Button}
            content= {buttonContent}/>
        <h4> OR</h4>
       <a href='/' className={styles.SignIn}>SIGN IN</a>
    </div>
    
);

export default loyaltyContainer;
