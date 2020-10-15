import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import burritoImg from '../Assets/burrito.png';
import tacosImg from '../Assets/tacos.jpg';
import sidesImg from '../Assets/chips-guac.jpg';
import styles from './MenuDisplay.module.css';
//NEXT STEPS:
//Import burrito, taco, sides images
//create array of objects for each
//create display template in MenuItem
//create action template in menuItem?

const menuItems = [
    {
        name: 'BURRITO',
        img: burritoImg 
    },
    {
        name: 'TACOS',
        img: tacosImg 
    },
    {
        name: 'SIDES & DRINKS',
        img:  sidesImg 
    }
];

const menuDisplay = (props) => (
    <div className={styles.MenuDisplay}>
        {menuItems.map(item => (
            <MenuItem 
                key={item.name}
                click={(item, img)=>{ props.click(item, img)}}
                name={item.name}
                img={item.img}
            />
        ))}

    </div>

);

export default menuDisplay;

