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
        <i className="fas fa-user-plus fa-2x"></i>
        <p> MAKE IT A GROUP ORDER</p>
    </Aux>
    ;

const xOutTag = <i className="fas fa-times fa-2x"></i>;


const checkoutSideDrawer =(props)=> {
        let drawerStyles=styles.PageContainer;
        if(!props.shown){
            drawerStyles=`${styles.PageContainer} ${styles.Hidden}`
        };
        let orderSummary="";
        if(props.order.length===0){
            orderSummary="Click on a menu item to add it to your bag!";
        }
        if(props.order.length >0){
            orderSummary= props.order.map((item, index )=>{
                let itemPrice= item[item.length -1].ITEMPRICE;
            
                let itemText= `${item[0]}: `;
                for(let i=1; i< item.length-1; i++){
                    if(i=== item.length -2){
                        itemText+= `${item[i][0]}`
                    } else{
                        itemText+= `${item[i][0]}, `;
                    }
                }
                return(
                <div className={styles.OrderLineItem}>
                    <h4 className={styles.ItemName}>{itemText}</h4>
                    <h4 className={styles.ItemPrice}>ITEM PRICE: ${itemPrice.toFixed(2)}</h4>
                    <i className="fas fa-times" onClick={()=>props.removeItemClick(index)}></i>
                </div> 
            )})
        }
        return(
            <div className={drawerStyles}>
            <div className={styles.PageOverlay}>
            </div>
            <div className={styles.CheckoutSideDrawer}>
                <div className={styles.Header}>
    
                    <div className={styles.HeaderLeft}>
                        <Button style={styles.FindRestaurantBtn} content={findRestaurantTag} />
                        <Button style={styles.MakeGroupOrderBtn} content={makeGroupOrderTag} />
                    </div>
                    <div className={styles.HeaderRight} >
                        <Button content={xOutTag} clicked={()=>props.drawerClick(false)}/>
                    </div>
                </div>
    
                <div className={styles.OrderContent}>
                    <div className={styles.OrderSummary}>
                        {orderSummary}
                        
                    </div>
    
                    <div className={styles.OrderTotal}>
                        <div className={styles.TotalLineItem}>
                            <h3 className={styles.ItemName}>Bag Total</h3>
                            <h3 className={styles.ItemPrice}>${props.totalPrice.toFixed(2)}</h3>
                        </div>
    
                        <div className={styles.AddMoreBtn} href="menu-display" 
                        onClick={()=>{
                            props.addAnotherItemClick();
                            props.drawerClick(false);
                            } }
                        >   
                                <h3>ADD ANOTHER MENU ITEM</h3>
                                        
                        </div>
    
                    </div>
    
                </div>
    
                <div className={styles.Footer}
                        onClick={props.submitOrder}>
                    <h1>CHECKOUT</h1>
                </div>
            </div>
        </div>

        )
    
     
    };


export default checkoutSideDrawer; 