import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Order Summry</h1>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;