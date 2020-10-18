import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import ItemPage from './ItemPage/ItemPage';

class App extends Component {
  state = {
    pageShown:<HomePage itemClick={(item,img) => this.pageShownHandler(item,img)} />,
    order: []
  }

  pageShownHandler = (item, img) => {
      if(item === "BURRITO" || item === "TACOS" || item=== "SIDES & DRINKS"){
        let newPage= <ItemPage 
                        addToBagClick={(itemArray)=>this.addToOrderHandler(itemArray)}
                        returnHomeClick={(item, img) =>this.pageShownHandler (item, img)} name={item} image={img}/>;
        this.setState({ pageShown: newPage});
      }
      if(item==="HOMEPAGE"){
        this.setState({pageShown:<HomePage itemClick={(item,img) => this.pageShownHandler(item,img)} 
        />})
      }
  }

  addToOrderHandler=(itemArray)=>{
    alert("added " + itemArray);
    //add to state
  }

  render() {
    let pageShown = this.state.pageShown;
    
    // let pageShown = <ItemPage name="TEST" />;
    return (
      <div>
        {pageShown}
      </div>
    );
  }

}

export default App;
