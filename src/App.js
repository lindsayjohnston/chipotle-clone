import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import PromoBanner from './PromoBanner/PromoBanner';
import LoyaltyContainer from './LoyaltyContainer/LoyaltyContainer';
import MenuDisplay from './MenuDisplay/MenuDisplay';

function App() {
  return (
    <div>
        <MenuBar />
        <PromoBanner/>
        <LoyaltyContainer/>
        <MenuDisplay/>
    </div>
  );
}

export default App;
