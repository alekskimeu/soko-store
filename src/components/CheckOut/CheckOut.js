import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className="checkout">
            <VerifiedUserIcon />
            <h4>Thank you!</h4>
            <h4>Your order has been placed successfully</h4>
            <small>You will receive a confirmation message as soon as the order is accepted.</small>
            <p>Order Number: John-271e</p>
            <div className="checkout__cta">
                <Link className="checkout__track">Track Order</Link>
                <Link to="/" className="checkout__back">Continue Shopping</Link>
            </div>
        </div>
    )
}

export default CheckOut
