import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import ItemPage from './ItemPage/ItemPage';
import SideDrawer from './CheckoutSideDrawer/CheckoutSideDrawer';

class App extends Component {
  state = {
    pageShown:<HomePage 
                itemClick={(item,img) => this.pageShownHandler(item,img)} checkoutClick={(boolean)=>this.sideDrawerShownHandler(boolean)}/>,
    order: [],
    totalPrice: 0,
    sideDrawerShown: false
  }

  removeFromBagHandler=(orderIndex) =>{
    //START HERE
    //ADD PROP TO SIDEDRAWER--removeItemClick
    let updatedOrderSumarry= this.state.order;
    updatedOrderSumarry.splice(orderIndex, 1);
    this.setState({order: updatedOrderSumarry});
  }

  addToBagHandler= (itemArray)=>{
    let newOrder= this.state.order;
    alert('added ' + itemArray + 'to bag');
    //ADD CHARGES TOGETHER FOR ITEM
    let itemPrice=0;
    for(let i=1; i < itemArray.length; i++){
      if(itemArray[i][1] !== null){
        let numberString=itemArray[i][1];
        let number=parseFloat(numberString.slice(1, numberString.length));
        itemPrice+= number;
      }
    }
    itemArray.push({ITEMPRICE: itemPrice});
    newOrder.push(itemArray);
    let updatedPrice= this.state.totalPrice + itemPrice;
    this.setState({order: newOrder, totalPrice: updatedPrice});
  }

  pageShownHandler = (item, img, itemOrdered) => {
      if(item === "BURRITO" || item === "TACOS" || item=== "SIDES & DRINKS"){
        let newPage= <ItemPage
                        addToBagClick={(itemArray) =>{ this.addToBagHandler(itemArray)}}
                        checkoutClick={(boolean)=>this.sideDrawerShownHandler(boolean)} 
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
        <SideDrawer 
            drawerClick={this.sideDrawerShownHandler}
            shown={this.state.sideDrawerShown} 
            order={this.state.order}  
            totalPrice={this.state.totalPrice}
            removeItemClick={this.removeFromBagHandler}
            />
        {/* {sideDrawer} */}
      </div>
    );
  }

}

export default App;
