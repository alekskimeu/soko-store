import React from 'react'
import './RelatedProduct.css'

const RelatedProduct = ({ product: { image, title, description, discount } }) => {
    return (
        <div className="related">
            <img src={image.default} alt={title} />
            <h5>{title}</h5>
            <p>{description} ...</p>
        </div>
    )
}

export default RelatedProduct
