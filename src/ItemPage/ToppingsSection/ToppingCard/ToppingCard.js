import React from 'react';
import styles from './ToppingCard.module.css';


const toppingCard = (props) => {
    let price= null;
    if(props.price !== null){
        price='$' + props.price.toFixed(2);
    }
    
    return(
            <div className={styles.Image}
                style={{ backgroundImage: props.image}}>

                <div className={styles.ToppingCard}>
                    <div className={styles.Top} >
                        <h2>{props.name}</h2>
                        <p>{price}</p>
                    </div>
                    <p className={styles.Bottom}>{props.calories} calories</p>
                </div>


            </div>
        
)};


export default toppingCard;