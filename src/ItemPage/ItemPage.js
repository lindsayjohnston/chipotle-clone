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
const returnToMenuTag = <h1>RETURN TO MENU</h1>
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
            options: ["SIDES", "DRINKS"]
        },
        itemOrdered: null
    }

    addToppingHandler(item, topping,price) {

        alert(topping + item + price)
        if (this.state.itemOrdered === null) {
            this.setState({ itemOrdered: [item, [topping, price]] })
        }
        else {
            let itemArray = this.state.itemOrdered;
            itemArray.push([topping, price]);
            this.setState({ itemOrdered: itemArray });
        }


    };

    render() {
        let yourMealMessage="Click on an ingredient to add it to your order.";
        if(this.state.itemOrdered !== null){
            yourMealMessage=`${this.state.itemOrdered[0]}: `;
            for(let i=1; i< this.state.itemOrdered.length; i++){
                if(i=== this.state.itemOrdered.length -1){
                    yourMealMessage+= `${this.state.itemOrdered[i][0]}`
                } else{
                    yourMealMessage+= `${this.state.itemOrdered[i][0]}, `;
                }
            }
        }
        let description = null;
        let options = null;
        if (this.props.name === 'BURRITO') {
            description = this.state.BURRITO.description;
            options = this.state.BURRITO.options;
        } if (this.props.name === 'TACOS') {
            description = this.state.TACOS.description;
            options = this.state.TACOS.options;
        } if (this.props.name === 'SIDES & DRINKS') {
            description = this.state.SIDESANDDRINKS.description;
            options = this.state.SIDESANDDRINKS.options;
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
                        <Button content={returnToMenuTag}
                            style={styles.ReturnToMenu}
                            clicked={() => { this.props.returnHomeClick("HOMEPAGE", null, this.state.itemOrdered) }}
                        />
                    </div>
                    <Button content={checkOutTag}
                        style={styles.CheckOut}
                        clicked={() => this.props.checkoutClick(true)}
                    />
                </nav>
                <div className={styles.ItemPageMain}>
                    <div className={styles.ItemPageBanner}>
                        <img alt={this.props.name} src={this.props.image} ></img>

                        <div className={styles.Description}>
                            <h2 >BUILD YOUR </h2>
                            <h1>{this.props.name}</h1>
                            <p>{description}</p>

                        </div>
                    </div>
                    <div className={styles.ItemChoicesDiv}>
                        {options.map(
                            title => (
                                <ToppingSection key={title} title={title}
                                    toppingClick={(topping, price) => { this.addToppingHandler(this.props.name, topping,  price) }} />
                            ))}

                    </div>
                    <div className={styles.CheckoutBottomBar}>
                        <div>
                            <h2>YOUR MEAL</h2>
                            <p>{yourMealMessage}</p>

                        </div>
                        <Button content={bottomButtonTag} style={styles.BottomButton} clicked={() => this.props.addToBagClick(this.state.itemOrdered)} />

                    </div>

                </div>


            </Aux>

        )
    }

};

export default ItemPage;