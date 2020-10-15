import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import ItemPage from './ItemPage/ItemPage';

class App extends Component {
  state = {
    pageShown:<HomePage itemClick={(item,img) => this.pageShownHandler(item,img)} />
    
  }

  pageShownHandler = (item, img) => {
    let newPage= <ItemPage name={item} image={img}/>;
    this.setState({ pageShown: newPage});
  }

  render() {
    // let pageShown = this.state.pageShown;
    
    let pageShown = <ItemPage name="TEST" />;
    return (
      <div>
        {pageShown}
      </div>
    );
  }

}

export default App;
