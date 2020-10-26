import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import ItemPage from './ItemPage/ItemPage';
import SideDrawer from './CheckoutSideDrawer/CheckoutSideDrawer';

class App extends Component {
  state = {
    pageName: "HOMEPAGE",
    itemImage: null,
    order: [],
    totalPrice: 0,
    sideDrawerShown: false,
    pageShown:<HomePage 
                order={null}
                itemClick={(item,img) => this.pageShownHandler(item,img)} checkoutClick={(boolean)=>this.sideDrawerShownHandler(boolean)}/>
  }

  removeFromBagHandler=(orderIndex) =>{
    let itemOrdered=this.state.order[orderIndex]
    let price= itemOrdered[itemOrdered.length -1].ITEMPRICE;
    let updatedPrice= this.state.totalPrice - price;
    let updatedOrderSummary= this.state.order;
    updatedOrderSummary.splice(orderIndex, 1);
    this.setState({order: updatedOrderSummary, totalPrice: updatedPrice});
    this.pageShownHandler(this.state.pageName, this.state.itemImage);
  }

  addToBagHandler= (itemArray)=>{
    let newOrder= this.state.order;
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
                        order={this.state.order}
                        addToBagClick={(itemArray) =>{ this.addToBagHandler(itemArray)}}
                        checkoutClick={(boolean)=>this.sideDrawerShownHandler(boolean)} 
                        returnHomeClick={(item, img) =>this.pageShownHandler (item, img)} 
                        name={item} 
                        image={img}/>;
        this.setState({ pageShown: newPage, pageName: item, itemImage: img});
      }
      if(item==="HOMEPAGE"){
        if(itemOrdered!== null && itemOrdered !==undefined){
          this.state.order.push(itemOrdered)
        }
        this.setState({pageName: item, pageShown:<HomePage  
            order={this.state.order}      
            itemClick={(item,img,itemOrdered) => this.pageShownHandler(item,img, itemOrdered)}
             checkoutClick={this.sideDrawerShownHandler} 
        />})
      }
  }

  sideDrawerShownHandler=(boolean) =>{
    this.setState({sideDrawerShown: boolean});
  }

  submitOrderHandler= () =>{
    //SEND ORDER TO FIREBASE
    if(this.state.order.length === 0){
      alert("Add items to your order first!")
    } else{
      // debugger;
      this.setState({itemImage: null,
        order: [],
        totalPrice: 0,}, ()=>{
          alert("Order submitted successfully!");
          this.sideDrawerShownHandler(false);
          this.pageShownHandler("HOMEPAGE");
        });
    }
  }

  render() {
    let pageShown = this.state.pageShown;
    
    return (
      <div>
        {pageShown}
        <SideDrawer 
            submitOrder = {this.submitOrderHandler}
            addAnotherItemClick={()=>this.pageShownHandler("HOMEPAGE")}
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
