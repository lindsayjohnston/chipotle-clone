import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Button from '../Button/Button';
import styles from './ItemPage.module.css';
import barsTag from '../TagsForButtons/BarsTag';
import logoTag from '../TagsForButtons/LogoTag';
import signInTag from '../TagsForButtons/SignInTag';
import checkOutTag from '../TagsForButtons/CheckOutTag';
import ToppingSection from './ToppingsSection/ToppingsSection';


const bottomButtonTag = <h2>ADD TO BAG</h2>;

class ItemPage extends Component {
    state = {
        BURRITO: {
            description: "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
            options: ["PROTEIN OR VEGGIE", "RICE", "BEANS", "TOPPINGS"]
        },
        TACOS: {
            description: "Your choice of freshly grilled meat or sofritas served in a soft or hard-shell tortilla with guac, salsa, queso blanco, sour cream or cheese, and topped with hand-cut romaine lettuce.",
            options: ["PROTEIN OR VEGGIE", "BEANS", "TOPPINGS"]
        },
        SIDESANDDRINKS: {
            description: "Everything else you need to round out your meal.",
            options: ["BEANS", "TOPPINGS"]
        }
    }

    render() {
        let description= null;
        let options= null;
        if (this.props.name === 'BURRITO') {
            description= this.state.BURRITO.description;
            options= this.state.BURRITO.options;
        } if (this.props.name === 'TACOS') {
            description= this.state.TACOS.description;
            options= this.state.TACOS.options;
        } if (this.props.name === 'SIDES & DRINKS') {
            description= this.state.SIDESANDDRINKS.description;
            options= this.state.SIDESANDDRINKS.options;
        } 
        ;

        

        return (
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
                            <img alt={this.props.name} src={this.props.image} ></img>
                        </div>
                        <div className={styles.Description}>
                            <h2 >BUILD YOUR </h2>
                            <h1>{this.props.name}</h1>
                            <p>{description}</p>

                        </div>


                    </div>


                    <div className={styles.ItemChoicesDiv}>
                        {options.map(
                            title=>(
                                <ToppingSection key={title} title={title} />))}

                    </div>
                    <div className={styles.CheckoutBottomBar}>
                        <div>
                            <h2>YOUR MEAL</h2>
                            <p>This is a message that might change according to options needed to be added.</p>

                        </div>
                        <Button content={bottomButtonTag} style={styles.BottomButton} />

                    </div>

                </div>


            </Aux>

        )
    }

};

export default ItemPage;