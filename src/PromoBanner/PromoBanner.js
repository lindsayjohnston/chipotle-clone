import React from 'react';
import Button from '../Button/Button';
import styles from './PromoBanner.module.css';

const promoBanner= (props) =>(
    <div className={styles.PromoBanner}>
        <h2>LIMITED TIME</h2>
        <h1>CARNE ASADA</h1>
        <h3>
        Tender Steak, Spices, Lime and Cilantro. Here for a limited time for contactless pickup and <a href="/">$1 Delivery</a>.
        </h3>
        <Button style={styles.Button}  content="ORDER NOW"/>
        <p> Addt’l service fee applies. $10 min/$200 max, exclu. Tax. Limited time. Addt’l terms: <a href= '/'>chipotle.com/dollardelivery</a></p>
    </div>
);

export default promoBanner;