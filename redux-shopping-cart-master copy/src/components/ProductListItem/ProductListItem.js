import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({
            type: 'ADD_NEW_CART',
            payload: this.props.product
        })
    }

    deleteFromCart = (event) => {
        console.log('it has been deleted', event.target.id)
        this.props.dispatch({
            type: 'DELETE_FROM_CART',
            payload: event.target.id
        })
    }

    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price} <button onClick={this.addProductToCart}>Add to Cart</button>
                <button onClick={this.deleteFromCart} id={this.props.index}>Delete from Cart</button>
                
            </li>
        )
    }
}

export default connect()(ProductListItem);