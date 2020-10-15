import React, { Component } from 'react';
import styles from './MenuItem.module.css';

class MenuItem extends Component {
    state = {
        hovered: false
    }

    mouseEnterHandler = () => {
        this.setState({hovered:true});
    }

    mouseLeaveHandler = () => {
        this.setState({hovered:false});
    }

    render() {
        let orderLabel= <div className={styles.Label}></div>;
        let image= <img className={styles.SmallImg} alt={this.props.name} src={this.props.img}></img>;

        if(this.state.hovered) {
            orderLabel= <h2 className={styles.Label}>ORDER <i class="fas fa-arrow-right"></i></h2>;

            image= <img className={styles.BigImg} alt={this.props.name} src={this.props.img}></img>;
        };


        return (
            <div 
                onClick={()=>{this.props.click(this.props.name, this.props.img)}}
                className={styles.MenuItem} onMouseEnter={this.mouseEnterHandler} 
                onMouseLeave= {this.mouseLeaveHandler}>
                <div className={styles.FixedTop}>
                    {image}
                </div>
                <div className={styles.FixedBottom}>
                    <h1>{this.props.name}</h1>
                    {orderLabel}
                </div>
            </div>
        )
    }
};

export default MenuItem;