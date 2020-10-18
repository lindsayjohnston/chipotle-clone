import React, { Component } from 'react';
import ToppingCard from './ToppingCard/ToppingCard';
import styles from './ToppingsSection.module.css';

class ToppingsSection extends Component {
    state = {
        "PROTEIN OR VEGGIE": {
            description: "Choose up to two.",
            options: [
                {
                    name: "CARNE ASADA",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6608-carne-asada/web-mobile/order.png)",
                    price: 9.25,
                    calories: 250
                },
                {
                    name: "CHICKEN",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6601-chicken/web-mobile/order.png)",
                    price: 7.25,
                    calories: 180
                },
                {
                    name: "STEAK",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6602-steak/web-mobile/order.png)",
                    price: 8.25,
                    calories: 150
                },
                {
                    name: "VEGGIE",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5301-guacamole/web-mobile/order.png)",
                    price: 7.25,
                    calories: 20
                }
                
            ]
        },
        "RICE": {
            description: null,
            options: [
                {
                    name: "WHITE RICE",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5001-white-rice/web-mobile/order.png)",
                    price: null,
                    calories: 210
                },
                {
                    name: "BROWN RICE",
                    image:"url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png)",
                    price: null,
                    calories: 210
                }
                
            ]
        },
        "BEANS": {
            description: null,
            options: [
                {
                    name: "BLACK BEANS",
                    image:"url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5051-black-beans/web-mobile/order.png)",
                    price:null,
                    calories: 130
                },
                {
                    name: "PINTO BEANS",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5052-pinto-beans/web-mobile/order.png)",
                    price: null,
                    calories: 130
                },
                
            ]
        },
        "TOPPINGS": {
            description: null,
            options: [
                {
                    name: "GUACAMOLE",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5301-guacamole/web-mobile/order.png)",
                    price: 2.25,
                    calories: 230
                },
                {
                    name: "SALSA",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5201-fresh-tomato-salsa/web-mobile/order.png)",
                    price: null,
                    calories: 25
                },
                {
                    name: "SOUR CREAM",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5251-sour-cream/web-mobile/order.png)",
                    price: null,
                    calories: 110
                }
                
            ]
        },
        "SIDES": {
            description: null,
            options: [
                {
                    name: "CHIPS",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1002-chips/web-mobile/chips.png)",
                    price: 1.45,
                    calories: 540
                },
                {
                    name: "SALSA",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5201-fresh-tomato-salsa/web-mobile/order.png)",
                    price: 1.00,
                    calories: 25
                },
            ]
        },
        "DRINKS": {
            description: null,
            options: [
                {
                    name: "MEXICAN COCA-COLA",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2810-mexican-coca-cola/web-desktop/order.png)",
                    price: 3.00,
                    calories: 150
                },
                {
                    name: "ORGANIC LEMONADE",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-ftn-organic-lemonade/web-desktop/order.png",
                    price: 2.40,
                    calories: 110
                },
                {
                    name: "BOTTLED WATER",
                    image: "url(https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2201-bottled-water/web-desktop/order.png",
                    price: 2.45,
                    calories: 0
                }
                
            ]
        },
    }

    render() {
        const title = this.props.title;

        return (
            <div className={styles.ToppingsSection}>
                <div>
                    <h1>{title}</h1>
                    <p>{this.state[title].description}</p>
                </div>
                <div className={styles.ToppingCards}>
                    {this.state[title].options.map(option => (
                        <div className={styles.ToppingCardMargin}>
                             <ToppingCard
                             toppingClick= {this.props.toppingClick}
                            className={styles.ToppingCard} 
                            image={option.image}
                            price={option.price}
                            calories={option.calories}
                            name={option.name}/>
                            

                        </div>))
                    }

                       
                    
                </div>

            </div>
        )
    }
}

export default ToppingsSection; 