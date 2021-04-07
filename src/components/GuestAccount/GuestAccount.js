import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './GuestAccount.css'

const GuestAccount = () => {
    const [phone, setPhone] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [deliveryConfirmed, setDeliveryConfirmed] = useState(false)
    const [payment, setPayment] = useState(false)
    
    const userLogin = () => {
        setLoggedIn(true)
    }

    const handleDelivery = () => {
        setDelivery(true)
        setTimeout(function () {setDeliveryConfirmed(true)}, 3000)
    }

    const handleSelect = () => {
        setPayment(true)
    }

    return (
        <div className="guestAccount">

            <div className="account__info">
                <div className="account__infoHeader">
                    <div className="info__headerNumber">
                        <div className="title active">
                            {loggedIn ?
                                <span>&#10003;</span>  : 1}
                        </div>
                    <div className="info__headerContent" style={{ marginBottom: loggedIn ? ".5rem" : "2rem"}}>
                        <h3>Account</h3>
                            {loggedIn ? <p>You are securely logged in.</p> : <p>To place your order, login by entering your 10 digit mobile number</p>}
                        </div>
                    </div>
                    {!loggedIn ?
                        <>
                    <small>Mobile Number</small>
                        <div className="account__login">
                        <p>+256</p>
                        <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder="Enter mobile number" />
                        <button className="login-btn"
                            onClick={userLogin}
                            style={{
                                backgroundColor: phone.length === 10 ?
                                    "var(--secondary-color)" : "lightgray",
                                color: phone.length === 10 ? "var(--main-color)" : "#fff"
                            }}>Login</button>
                        </div>
                    </>
                        : null}
                </div>
            </div>

            <div className="deliveryAddress" style={{marginBottom: loggedIn ? ".5rem" : "2rem" }}>
                <div className="title" style={{backgroundColor: loggedIn ? "var(--main-color)" : "lightgray"}}>
                    {loggedIn ? <span>&#10003;</span> : 2 }
                </div>
                <div className="delivery__info">
                    <h3>Delivery address</h3>
                    {
                        deliveryConfirmed ?
                            <>
                                <div className="change-delivery">
                                    <p>Select your delivery address from the existing ones or add new</p>
                                    <button className="add-address">Change Address</button>
                                </div>
                                <div className="address">
                                    <h4>Shrey Karah</h4>
                                    <p>Quench Ville, Plot 12 NKrumah Rd, Kampala Uganda: {phone}</p>
                                </div>
                                </>
                            :
                    
                            <p>Select your delivery address from the existing ones or add a new one</p>
                    }
                </div>
            </div>
            {loggedIn ?
                <div className="delivery__cards" style={{display: deliveryConfirmed ? "none": "flex"}}>
                    <div className="card" onClick={handleDelivery}
                        style={{ backgroundColor: delivery ? "#e9eff9" : "whitesmoke", position: "relative" }}>
                        <h4>Shrey Karah</h4>
                        <p>Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</p>
                        <p>+256 76 633 4574</p>
                        <CheckCircleIcon className="delivery__check" style={{
                            position: delivery ? "absolute" : "",
                            right: delivery ? "-8" : "",
                            top: delivery ? "-12" : "",
                            display: delivery ? "block" : "none",
                            fill: "var(--main-color)"
                        }} />
                    </div>
                    <div className="card card-new">
                        <p><span><AddIcon /></span>Add New Address</p>
                    </div>
                </div>
            : null}

            <div className="payment" style={{marginTop: deliveryConfirmed ? "4rem" : ""}}>
                <div className="title" style={{backgroundColor: delivery ? "var(--main-color)" : "lightgray"}}>
                    3
                </div>
                <div className="payment__info">
                    <h3>Payment</h3>
                    <p>Select your payment method</p>
                    {
                        deliveryConfirmed ?
                            <>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem"}}>
                                    <input type="radio"
                                        style={{
                                            marginRight: ".5rem",
                                            color: payment ? "var(--main-color)" : ""
                                        }}
                                        onClick={handleSelect} />
                                    <p>Cash on delivery</p>
                                </div>
                                     
                                <Link to="/checkout" className="place-order" style={{display: payment ? "block" : "none"}}>Place Order</Link>                                
                            </>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default GuestAccount
