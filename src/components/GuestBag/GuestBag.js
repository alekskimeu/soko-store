import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item/Item'

import GuestAccount from '../GuestAccount/GuestAccount'
import Cart from './Item/Cart/Cart'

import './GuestBag.css'

const items = [
    {
        id: 0,
        title: "Earrings and Mangtikka",
        subtitle: "Per piece",
        price: "UGX 118,400",
        discount: "UGX 148,000"
    },
    {
        id: 1,
        title: "Colorful Earrings Jhumki",
        subtitle: "Per piece",
        price: "UGX 118,400"
    }
]

const itemsLen = items.length


const GuestBag = () => {
    return (
        <div className="guest">
            <div className="guestAccount">
                <GuestAccount />
            </div>
        <div className="guestBag">
            <div className="guestBag__header">
                <h4>Bag <span>0</span></h4>
                <Link>Clear Bag</Link>
            </div>
            <div className="guestBag__body">
                {
                    items.map((item) => (
                        <Item key={item.id} item={item} itemsLen={itemsLen} />
                    ))
                }
                </div>
            <Cart />        
                
        </div>
        </div>
    )
}

export default GuestBag
