import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import PromoBanner from './PromoBanner/PromoBanner';
import LoyaltyContainer from './LoyaltyContainer/LoyaltyContainer';

function App() {
  return (
    <div>
        <MenuBar />
        <PromoBanner/>
        <LoyaltyContainer/>
    </div>
  );
}

export default App;
