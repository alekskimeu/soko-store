import React from 'react'
import { Link } from 'react-router-dom'
import './SingleCategory.css'

const SingleCategory = ({ category: {image, title}}) => {
    return (
        <div className="singleCategory">
            <Link>
                <img src={image.default} alt={title} />
                <h4>{title}</h4>
            </Link>
        </div>
    )
}

export default SingleCategory
