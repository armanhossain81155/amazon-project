import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + parseFloat(prd.price) * parseFloat(prd.quantity),0);
    console.log(total)
    console.log(total);
    const tax = total / 10;
    let shipping = 0;
    const grandTotal = total + tax + shipping;
    if(total > 100){
        shipping = 0;
    }
    else if(total > 50){
        shipping = 5;
    }else if(total > 0){
        shipping = 12;
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered : {cart.length}</h4>
            
            Price Before Tax : {formatNumber( total)}
            <br />
            Tax : {formatNumber(tax)}
            <br />
            Shipping Cost : {formatNumber(shipping)}
            <br />
            <h5>Total Cost : {formatNumber(grandTotal)}</h5>
            
            <br />
            {
                    props.children
            }
            
            
            
        </div>
    );
};

export default Cart;