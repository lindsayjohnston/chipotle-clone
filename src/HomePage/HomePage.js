import React from 'react';
import Aux from '../Aux/Aux'
import MenuBar from '../MenuBar/MenuBar';
import PromoBanner from '../PromoBanner/PromoBanner';
import LoyaltyContainer from '../LoyaltyContainer/LoyaltyContainer';
import MenuDisplay from '../MenuDisplay/MenuDisplay';

const homePage = (props) => (
    <Aux>
        <MenuBar checkoutClick={props.checkoutClick} order={props.order}/>
        <PromoBanner />
        <LoyaltyContainer/>
        <MenuDisplay click={(item, img)=>{props.itemClick(item, img)}}/>
    </Aux>
);

export default homePage;



