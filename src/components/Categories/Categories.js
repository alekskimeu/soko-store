import React from 'react'
import Category from './Category/Category'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Categories.css'

const Categories = () => {
    return (
        <div className="categories">
            <Category title="Electronics" number={12} active={true} />
            <Category title="Face Masks" number={3} active={false}/>
            <Category title="Fresh Food" number={8} active={false}/>
            <Category title="Grocery" number={6} active={false}/>
            <Category title="Home" number={24} active={false}/>
            <Category title="Kids" number={9} active={false} />
            
            <a href="" className="more-categories">View all categories <ArrowForwardIosIcon /> </a>
        </div>
    )
}

export default Categories
