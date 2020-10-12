import React from 'react';
import Button from '../Button/Button';
import styles from './MenuBar.module.css';
import Aux from '../Aux/Aux';
import logo from '../Assets/burrito-logo.jpg';


const menuTag = <i class="fas fa-bars fa-2x"></i>;
const logoTag = <img alt="burrito-logo" src={logo}></img>;
const signInTag = <Aux><i class="fas fa-user-alt fa-2x" ></i>
    <p> SIGN IN</p>
</Aux>;
const findRestaurantTag = <Aux><i class="fas fa-pepper-hot"></i>
    <p> FIND RESTAURANT</p>
</Aux>;
const checkOutTag= <i class="fas fa-shopping-bag fa-2x"></i>;


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
                    content={menuTag}
                    clicked={() => clickHandler('Menu')}
                />
                <Button
                    style={styles.Logo}
                    key="Logo"
                    content={logoTag}
                    clicked={() => clickHandler('Logo')}
                />
                <Button
                    style={styles.SignIn}
                    key="SignIn"
                    content={signInTag}
                    clicked={() => clickHandler('SignIn')}
                />
            </div>

            <div className={styles.MidDiv}>
                <Button
                    style={styles.FindRestaurant}
                    key="FindRestaurant"
                    content={findRestaurantTag}
                    clicked={() => clickHandler('FindRestaurant')}
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