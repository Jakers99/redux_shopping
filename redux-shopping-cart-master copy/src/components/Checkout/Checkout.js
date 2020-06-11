import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.history.push('/');

        this.props.dispatch({
            type: 'EMPTY_CART',
            payload: ''
        })
    }

    removeCart = (event) => {
        //console.log(event.target.id)
        this.props.dispatch({
            type: 'REMOVE_CART',
            payload: event.target.id
        })
    }

    totalPrice = (product) => {
        console.log(product);
        let totalPrice = 0;
        for (let index = 0; index < product.length; index++) {
            totalPrice = totalPrice + product[index].price;
        }
        return totalPrice
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                <ul>
                 {this.props.reduxState.checkoutReducer.map((product, index) => 
                    <li key={index}>{product.name}<button onClick={this.removeCart} id={index}>Remove From Cart</button></li>
                   )} 
                </ul>
                 <p>Total Price:{this.totalPrice(this.props.reduxState.checkoutReducer)}</p>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Checkout);