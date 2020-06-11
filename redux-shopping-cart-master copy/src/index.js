import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Default set of products
const products = [
    { name: `Marshmallow Mateys`, price: 6.98 },
    { name: `Golden Honney O's`, price: 6.48 },
    { name: `Frosted Flakes`, price: 3.98 },
];

// Array of products, this reducer is complete
const productReducer = (state = products, action) => {
    if (action.type === 'ADD_NEW_PRODUCT') {
        return [...state, action.payload];
    }
    else if (action.type === 'DELETE_FROM_CART') {
    let deleteProduct = state.filter((number, index) => index != action.payload)
    return deleteProduct
    }
    return state;
};

// Items in the cart, this reducer is incomplete
const checkoutReducer = (state = [], action) => {
    // TODO: Products added to the cart
    switch(action.type){
        case 'ADD_NEW_CART':
            return[...state, action.payload];
            break;
        case 'EMPTY_CART':
            return [action.payload]
            break;
        case 'REMOVE_CART':
            let newCart = state.filter((number, index) => index != action.payload)
            return newCart
            break;
    
            default:
                return state;
    }
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        productReducer,
        checkoutReducer
    }),    
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));