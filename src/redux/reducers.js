import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CHECKOUT } from './actions';

// Initial State
const initialState = {
  cart: [],
  checkoutStatus: null, // To track the checkout status
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      
      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.productId
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };

    case CHECKOUT:
      return {
        ...state,
        cart: [], // Clear cart after checkout
        checkoutStatus: 'Successfully Checked Out', // Display success message
      };

    default:
      return state;
  }
};

export default cartReducer;
