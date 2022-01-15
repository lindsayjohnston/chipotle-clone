import React from 'react';
import Button from '../Button/Button';
import styles from './MenuBar.module.css';
import barsTag from '../TagsForButtons/BarsTag';
import signInTag from '../TagsForButtons/SignInTag';
import logoTag from '../TagsForButtons/LogoTag';
import findRestaurantTag from '../TagsForButtons/FindRestaurantTag.js';
import checkOutTag from '../TagsForButtons/CheckOutTag';


const menuBar = (props) =>  {
    let circleClassNames;
    let numberOfItems=0;
        if(props.order=== null || props.order.length===0){
            circleClassNames=`${styles.Hidden}`;
        } else{
            numberOfItems= props.order.length;
            circleClassNames=`${styles.ItemNumberCircle}`
        }
        return (
            <header className={styles.MenuBar}>
                <div className={styles.LeftDiv}>
                    <Button
                        style={styles.Menu}
                        key="Menu"
                        content={barsTag}
                        className={styles.Bars}
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
                    <div className={styles.CheckOutBagOverlay}>
                        <Button
                            style={styles.CheckOut}
                            key="CheckOut"
                            content={checkOutTag}
                            clicked={() => props.checkoutClick(true)}
                        />
                        <div className={circleClassNames}>{numberOfItems}</div>
    
                    </div>
    
                </div>
    
    
            </header>
        )
    };

    


export default menuBar;