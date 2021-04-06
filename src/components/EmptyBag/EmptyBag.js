import React from 'react'
import { Link } from 'react-router-dom'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import './EmptyBag.css'

const EmptyBag = () => {
    return (
        <div className="empty__bag">
            <SentimentVeryDissatisfiedIcon />
            <h4>It's empty here</h4>
            <p>Start shopping to add items to your bag</p>
            <Link to="/" className="back-home">Back to Homepage</Link>
        </div>
    )
}

export default EmptyBag
