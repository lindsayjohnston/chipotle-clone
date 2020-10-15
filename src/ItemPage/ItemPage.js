import React from 'react';
import Aux from '../Aux/Aux';
import Button from '../Button/Button';
import styles from './ItemPage.module.css';
import barsTag from '../TagsForButtons/BarsTag';
import logoTag from '../TagsForButtons/LogoTag';
import signInTag from '../TagsForButtons/SignInTag';
import checkOutTag from '../TagsForButtons/CheckOutTag';
import ToppingSection from './ToppingsSection/ToppingsSection';

const bottomButtonTag=<h2>ADD TO BAG</h2>;

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
                <div className={styles.ImgPlaceHolder}>
                    <img alt={props.name} src={props.image} ></img>
                </div>
                <div className={styles.Description}>
                    <h2 >BUILD YOUR </h2>
                    <h1>{props.name}</h1>
                    <p>Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</p>

                </div>


            </div>


            <div className={styles.ItemChoicesDiv}>
                <ToppingSection />
                <ToppingSection />
                <ToppingSection />

            </div>
            <div className={styles.CheckoutBottomBar}>
                <div>
                    <h2>YOUR MEAL</h2>
                    <p>This is a message that might change according to options needed to be added.</p>

                </div>
                <Button content={bottomButtonTag} style={styles.BottomButton}/>

            </div>

        </div>


    </Aux>

);

export default itemPage;