import React from 'react';
import styles from "./CheckoutSideDrawer.module.css";
import Button from '../Button/Button';
import Aux from '../Aux/Aux';

const findRestaurantTag =
    <Aux><i className="fas fa-pepper-hot"></i>
        <p> FIND RESTAURANT</p>
    </Aux>
    ;

const makeGroupOrderTag =
    <Aux>
        <i class="fas fa-user-plus fa-2x"></i>
        <p> MAKE IT A GROUP ORDER</p>
    </Aux>
    ;

const xOutTag = <i class="fas fa-times fa-2x"></i>;

const checkoutSideDrawer = (props) => (
    <div className={styles.PageContainer}>
        <div className={styles.PageOverlay}>
        </div>
        <div className={styles.CheckoutSideDrawer}>
            <div className={styles.Header}>

                <div className={styles.HeaderLeft}>
                    <Button style={styles.FindRestaurantBtn} content={findRestaurantTag} />
                    <Button style={styles.MakeGroupOrderBtn} content={makeGroupOrderTag} />
                </div>
                <div className={styles.HeaderRight}>
                    <Button content={xOutTag} />
                </div>
            </div>

            <div className={styles.OrderContent}>
                <div className={styles.OrderSummary}>
                    <div className={styles.OrderLineItem}>
                        <h3 className={styles.ItemName}>ITEM NAME</h3>
                        <h3 className={styles.ItemPrice}>ITEM PRICE</h3>
                    </div>
                </div>

                <div className={styles.OrderTotal}>
                    <div className={styles.TotalLineItem}>
                        <h3 className={styles.ItemName}>Bag Total</h3>
                        <h3 className={styles.ItemPrice}>TOTAL PRICE</h3>
                    </div>

                    <div className={styles.AddMoreBtn}>
                        <h3>ADD ANOTHER MENU ITEM</h3>
                    </div>

                </div>

            </div>

            <div className={styles.Footer}>
                <h1>CHECKOUT</h1>
            </div>
        </div>
    </div>
);







export default checkoutSideDrawer; 