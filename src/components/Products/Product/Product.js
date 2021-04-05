import React from 'react'
import AddIcon from '@material-ui/icons/Add';

import './Product.css'

const Product = ({ product: { image, title, price, discount } }) => {
    return (
        <div className="product">
            <div className="product__image">
                <img src={image.default} alt={title} />
                {discount ? <p className="product__discount">{discount}</p> : null}
            </div>
            <div className="product__info">
                <div>
                    <h5>{title}</h5>
                    <div className="product__infoFooter">
                        <div>
                            <p>{price}</p>
                            {discount ? <p className="price__discount">{price}</p> : null}
                        </div>                        
                        <a href="" className="add-to-cart">
                            <AddIcon /> Add
                        </a>
                    </div>
                </div>
                
            
            </div>
        </div>
    )
}

export default Product
