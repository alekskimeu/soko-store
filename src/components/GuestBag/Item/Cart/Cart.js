import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <p className="cart__subTotal">Subtotal <span>UGX 12,700</span></p>
            <p className="cart__delivery">Delivery <span>Free</span></p>
            <p className="cart__total">Total<span>UGX 12,700</span></p>
            <small>Inclusive of all taxes</small>
            <p className="cart__message">You are about to save UGX 27,400 on this order</p>
        </div>
    )
}

export default Cart
