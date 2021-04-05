import React from 'react'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import './Bag.css'

const Bag = () => {
    return (
        <div className="bag">
            <h3 className="bag__header">Bag<span>0</span></h3>
            <div className="bag__info">
                <SentimentVeryDissatisfiedIcon />
                <h5>It's empty here</h5>
                <p>Start shopping to add items to your bag</p>
            </div>
        </div>
    )
}

export default Bag
