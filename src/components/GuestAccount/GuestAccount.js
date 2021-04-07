import React from 'react'
import './GuestAccount.css'

const GuestAccount = () => {
    return (
        <div className="guestAccount">

            <div className="account__info">
                <div className="account__infoHeader">
                    <div className="info__headerNumber">
                        <div className="title active">1</div>
                    <div className="info__headerContent">
                        <h3>Account</h3>
                        <p>To place your order, login by entering your 10 digit mobile number.</p>
                        </div>
                    </div>    
                    <small>Mobile Number</small>
                    <div className="account__login">
                        <p>+256</p>
                        <input type="number" placeholder="Enter mobile number" />
                        <button className="login-btn">Login</button>                        
                    </div>                    
                </div>
            </div>

            <div className="deliveryAddress">
                <div className="title">
                    2
                </div>
                <div className="delivery__info">
                    <h3>Delivery address</h3>
                    <p>Select your delivery address from the existing ones or add a new one</p>
                </div>
            </div>

            <div className="payment">
                <div className="title">
                    3
                </div>
                <div className="payment__info">
                    <h3>Delivery address</h3>
                    <p>Select your payment method</p>
                </div>
            </div>
        </div>
    )
}

export default GuestAccount
