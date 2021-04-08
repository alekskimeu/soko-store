import React from 'react'
import SingleCategory from './SingleCategory/SingleCategory'
import './AllCategories.css'

const categories = [
    {
        title: "Electronics",
        image: require("../../assets/images/back1.jpg")        
    },
    {
        title: "Face Masks",
        image: require("../../assets/images/back2.jpg")
    },
    {
        title: "Fresh Food",
        image: require("../../assets/images/back3.jpg")
    },
    {
        title: "Grocery",
        image: require("../../assets/images/back3.jpg")
    },
    {
        title: "Home",
        image: require("../../assets/images/back1.jpg")
    },
    {
        title: "Kids",
        image: require("../../assets/images/back3.jpg")
    }
]

const AllCategories = () => {
    return (
        <div>
            <h3 className="cats__header">ALL CATEGORIES</h3>
            <div className="allCategories">
                {
                    categories.map((category, index) => (
                        <SingleCategory key={index} category={category} />
                ))
                }
            </div>    
        </div>
    )
}

export default AllCategories
