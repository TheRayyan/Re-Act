import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import { CHECKOUT } from '../redux/actions';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const checkoutStatus = useSelector((state) => state.checkoutStatus); // Get checkout status from the Redux state

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT }); // Dispatch checkout action
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-sidebar">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src="https://via.placeholder.com/50" alt={product.name} />
            <div>
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
            <input
              type="number"
              value={product.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(product.id, +e.target.value)}
            />
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${totalPrice}</h3>

      {/* Checkout Button */}
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Checkout
      </button>

      {/* Display success message after checkout */}
      {checkoutStatus && <p>{checkoutStatus}</p>}
    </div>
  );
};

export default CartSidebar;
