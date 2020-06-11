import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { connect } from 'react-redux';

class ProductList extends Component {

    render() {
        return (
            <div>
                <ul>
                   {this.props.reduxState.productReducer.map((product, i) => {
                       return (
                           <ProductListItem key={i} product={product} index={i}/>
                       );
                   })} 
                </ul>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(ProductList);