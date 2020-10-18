import React from 'react';
import Button from '../Button/Button';
import styles from './MenuBar.module.css';
import barsTag from '../TagsForButtons/BarsTag';
import signInTag from '../TagsForButtons/SignInTag';
import logoTag from '../TagsForButtons/LogoTag';
import findRestaurantTag from '../TagsForButtons/FindRestaurantTag.js';
import checkOutTag from '../TagsForButtons/CheckOutTag';


const menuBar = (props) => {
    const clickHandler = name => {
        alert(`${name} was clicked!`)
    }

    return (
        <header className={styles.MenuBar}>
            <div className={styles.LeftDiv}>
                <Button
                    style={styles.Menu}
                    key="Menu"
                    content={barsTag}
                    clicked={() => clickHandler('Menu')}
                />
                <Button
                    style={styles.Logo}
                    key="Logo"
                    content={logoTag}
                />
                <Button
                    style={styles.SignIn}
                    key="SignIn"
                    content={signInTag}
                />
            </div>

            <div className={styles.MidDiv}>
                <Button
                    style={styles.FindRestaurant}
                    key="FindRestaurant"
                    content={findRestaurantTag}
                />
            </div>

            <div className={styles.RightDiv}>
            <Button
                    style={styles.CheckOut}
                    key="CheckOut"
                    content={checkOutTag}
                    clicked={() => clickHandler('CheckOut')}
                />
            </div>


        </header>
    )
};

export default menuBar;