import React from 'react';
import './App.css';

export default function App() {
  const [checkout, setCheckout] = React.useState(false);
  const [backButton, setBackButton] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-PayPal</h1>
        <button className="checkout-button">Checkout</button>
      </header>
    </div>
  );
}


