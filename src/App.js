import React, { Component } from 'react';
import styles from './App.module.css';
import HomePage from './HomePage/HomePage';
import ItemPage from './ItemPage/ItemPage';
import SideDrawer from './CheckoutSideDrawer/CheckoutSideDrawer';

class App extends Component {
  state = {
    pageShown:<HomePage 
                itemClick={(item,img) => this.pageShownHandler(item,img)} checkoutClick={(boolean)=>this.sideDrawerShownHandler(boolean)}/>,
    order: [],
    sideDrawerShown: false
  }

  pageShownHandler = (item, img, itemOrdered) => {
      if(item === "BURRITO" || item === "TACOS" || item=== "SIDES & DRINKS"){
        let newPage= <ItemPage
                        checkoutClick={(boolean)=>this.sideDrawerShownHandler(boolean)} 
                        addToBagClick={(itemArray)=>this.addToOrderHandler(itemArray)}
                        returnHomeClick={(item, img) =>this.pageShownHandler (item, img)} name={item} image={img}/>;
        this.setState({ pageShown: newPage});
      }
      if(item==="HOMEPAGE"){
        if(itemOrdered!== null && itemOrdered !==undefined){
          this.state.order.push(itemOrdered)
        }
        this.setState({pageShown:<HomePage        
            itemClick={(item,img,itemOrdered) => this.pageShownHandler(item,img, itemOrdered)}
             checkoutClick={this.sideDrawerShownHandler} 
        />})
      }
  }


  sideDrawerShownHandler=(boolean) =>{
    this.setState({sideDrawerShown: boolean});
  }

  render() {
    let pageShown = this.state.pageShown;
    
    return (
      <div>
        {pageShown}
        <SideDrawer drawerClick={this.sideDrawerShownHandler} shown={this.state.sideDrawerShown}/>
        {/* {sideDrawer} */}
      </div>
    );
  }

}

export default App;
