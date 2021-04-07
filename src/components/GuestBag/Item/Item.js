import React from 'react'
import './Item.css'

const Item = ({ itemsLen, item: { title, subtitle, price, discount, id } }) => {
    console.log(id)
    return (
        <div className="item" style={{
            borderBottom: (id === itemsLen - 1) ? "1px solid darkgrey" : "none",
            paddingBottom: (id === itemsLen -1) ? "1rem" : "none"
        }}>
        <h5>{title}</h5>
        <p className="item__subtitle">{subtitle}</p>
        <p>{price}</p>
            {discount ? <p className="item__discount">{discount}</p> : null}
            
            <div className="item__quantity">
                <span className="minus">-</span><span className="quantity">{id == 0 ? 1 : 5}</span><span className="add">+</span>
            </div>
        </div>
    )
}

export default Item
