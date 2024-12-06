import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';  // Import styles
import App from './App';  // Main app component
import { Provider } from 'react-redux';  // Redux Provider
import store from './redux/store';  // Redux store

// Render the app and wrap it with the Redux Provider to access store throughout the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
