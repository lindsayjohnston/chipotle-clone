import React from 'react';
import Aux from '../Aux/Aux';
import Button from '../Button/Button';
import styles from './ItemPage.module.css';
import barsTag from '../TagsForButtons/BarsTag';
import logoTag from '../TagsForButtons/LogoTag';
import signInTag from '../TagsForButtons/SignInTag';
import checkOutTag from '../TagsForButtons/CheckOutTag';

const itemPage = (props) => (
    <Aux >
        <nav className={styles.ItemPageNav}>
            <div className={styles.LeftSection}>
                <Button content={barsTag}
                    style={styles.Bars}
                />
                <Button
                    style={styles.Logo}
                    content={logoTag}
                />
                <Button
                    content={signInTag}
                    style={styles.SignIn}
                />
                <h2>RETURN TO MENU</h2>
            </div>
            <Button content={checkOutTag} 
                    style={styles.CheckOut}
            />



        </nav>
        <div className={styles.ItemPageMain}>
            <div className={styles.ItemPageBanner}>
                <img alt={props.name} src={props.image} ></img>
                <h1>BUILD YOUR {props.name}</h1>
            </div>
            <div>
                <div>PROTEIN OR VEGGIE</div>
                <div>RICE</div>
                <div>BEANS</div>
                <div>TOP THINGS OFF</div>
            </div>
            <div>
                YOUR MEAL
            <Button />
            </div>

        </div>


    </Aux>

);

export default itemPage;