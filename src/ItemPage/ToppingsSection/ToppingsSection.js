import React, { Component } from 'react';
import ToppingCard from './ToppingCard/ToppingCard';
import styles from './ToppingsSection.module.css';

class ToppingsSection extends Component {
    state = {
        proteinVeggie: ['PROTEIN OR VEGGIE', "Choose up to two",]
    }

    render() {

        return (
            <div className={styles.ToppingsSection}>
                <div>
                    <h1>{this.state.proteinVeggie[0]}</h1>
                    <p>{this.state.proteinVeggie[1]}</p>
                </div>
                <div className={styles.ToppingCards}>
                    <ToppingCard />
                    <ToppingCard />
                    <ToppingCard />
                    <ToppingCard />
                    <ToppingCard /> 

                </div>

            </div>
        )
    }
}

export default ToppingsSection; 