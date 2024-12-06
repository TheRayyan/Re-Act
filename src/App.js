import React from 'react';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';

const App = () => {
  return (
    <div className="app">
      <h1>Shopping App</h1>
      <div className="main-container">
        <ProductList />
        <CartSidebar />
      </div>
      {/* Uncomment for checkout page */}
      {/* <CheckoutPage /> */}
    </div>
  );
};

export default App;
